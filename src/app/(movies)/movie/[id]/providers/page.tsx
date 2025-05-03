import { Suspense } from 'react';
import { PagePropsWithPromise } from '../page';
import MovieProviders from '@/components/movieProviders';

export default async function ProvidersPage(props: PagePropsWithPromise) {

    const { params } = props;
    const resolvedParams = await params;

    return (
        <Suspense fallback={<h1>Loading providers...</h1>}>
            <MovieProviders id={resolvedParams.id} />
        </Suspense>
    )
}