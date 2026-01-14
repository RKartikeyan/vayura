'use client';

import { ReactNode } from 'react';
import { AuthProvider } from '@/lib/auth-context';
import { AuthGuard } from '@/components/auth-guard';

export function Providers({ children }: { children: ReactNode }) {
    return (
        <AuthProvider>
            <AuthGuard>{children}</AuthGuard>
        </AuthProvider>
    );
}
