import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useCollection } from 'react-firebase-hooks/firestore';
import firebase from 'firebase';
import UserService from "@utility/services/user";
import { NotificationMessage } from "@utility/notification";
import { useAuth } from '@contexts/auth';
import { Slide, ToastContainer, toast } from 'react-toastify';
import styled from "styled-components";

const NotificationContext = createContext();

const NotificationToastContainer = styled(ToastContainer)`
  button{
    margin-top:15px;
  }
  left: 260px;
  div{
    border-radius: 8px;
  }
  .Toastify__toast--info {
    background: white !important;
    color: black !important;
    .Toastify__progress-bar{
      background: black !important;
    }
  }
  .Toastify__close-button--info{
    color: black !important;
  }
`

export const NotificationProvider = ({ children }) => {
    const [refresh, setRefresh] = useState(0);
    const [oldNotifications, setOldNotifications] = useState(null);
    const [completeData, setCompleteData] = useState([]);
    const {currentOrg: organizationId, isAuthenticated, currentRoute} = useAuth();

    const [firestoreData] = useCollection(
        firebase.firestore().collection(organizationId ? `notifications/${organizationId}/messages` : 'predictions').orderBy("createdAt", "desc")
    )

    useEffect(() => {
        return (() => {
            setOldNotifications(null);
        })
    }, [organizationId])

    useEffect(() => {
        if(!organizationId) return;

        const newNotifications = completeData.map(noti => noti.data());
        let olderNotifications = [];
        
        if (oldNotifications)
            olderNotifications = [...oldNotifications];

        newNotifications.forEach((notification) => {
            const findIndex = (oldNotifications || []).findIndex(x => x.id === notification.id);
            if (findIndex < 0 && notification.body) {
                olderNotifications.push(notification);
                if(oldNotifications){
                    switch (notification.status) {
                        case 'success':
                            NotificationMessage.success(notification.body, notification.iconType);
                            break;
                        case 'error':
                            NotificationMessage.error(notification.body, notification.iconType);
                            break;
                        case 'warning':
                            NotificationMessage.warning(notification.body, notification.iconType);
                            break;
                        default:
                            NotificationMessage.info(notification.body, notification.iconType);
                            break;
                    }
                }
            } else {
                olderNotifications[findIndex] = notification;
            }
        })
        
        if (olderNotifications.length > 0) {
            setOldNotifications(olderNotifications);
        }
    }, [completeData]);

    useEffect(() => {
        if (firestoreData)
            setCompleteData(firestoreData.docs)
    }, [firestoreData])

    const update = () => {
        setRefresh(refresh + 1);
    }

    const unreadNotificationsCount = () => {
        let count = 0;
        const userInfo = UserService.getUserInfo();
        oldNotifications?.forEach(notification => {
            if (!(notification.seen.indexOf(userInfo._id) !== -1)) {
                count++;
            }
        })
        return count;
    }

    const publicView = useMemo(() => {
        if(currentRoute?.indexOf('/public/') === 0)
            return true;

        return false
    }, [currentRoute])

    const showNotificaitons = useMemo(() => {
        if(publicView) return false;
        if(!isAuthenticated) return false;
        return true;
    }, [isAuthenticated, publicView])
    
    useEffect(() => {
        if(!showNotificaitons){
            toast.dismiss();
        }
    }, [showNotificaitons])

    return (
        <NotificationContext.Provider value={{ refresh, update, completeData, unreadNotificationsCount, notifications: oldNotifications }}>
            {showNotificaitons && 
                <NotificationToastContainer
                    enableMultiContainer
                    position="bottom-left"
                    containerId="notification"
                    transition={Slide}
                    limit={6}
                />
            }
            {children}
        </NotificationContext.Provider>
    )

}

export const useNotification = () => useContext(NotificationContext);