import { CanActivateFn, Router } from "@angular/router";
import { inject } from '@angular/core'

export const authGuard: CanActivateFn = () => {
    const router = inject(Router)
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

    // if (!auth.hasValidToken() || !auth.isLoggedIn()) {
    //     router.navigate(['/login'])
    //     return false
    // }
    // return true

    return isLoggedIn
        ? true
        : router.parseUrl('/enter')
}