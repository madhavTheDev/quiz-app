'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export function ReactQueryDevtoolsWrapper() {
    return <ReactQueryDevtools initialIsOpen={false} />;
}