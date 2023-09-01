import { LoaderBar } from 'components'
import { useUser } from 'context'
import { Navigate } from 'react-router-dom'
import { AuthService } from 'utility'

export function ProtectedRoute({
    redirectPath = '/login',
    children,
}) {
    const { userLoading, user } = useUser()

    if (userLoading) {
        return <LoaderBar />
    }
    if (!AuthService.hasRoles(["admin"],user?.roles)) {
        return <Navigate to={redirectPath} replace />
    }

    return children
}
