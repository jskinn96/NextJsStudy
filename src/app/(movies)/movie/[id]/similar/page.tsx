import { Suspense } from 'react';
import { PagePropsWithPromise } from '../page';
import MovieSimilar from '@/components/movieSimilar';

export default async function SimilarMovies(props: PagePropsWithPromise) {
    
    const {params} = props;
    const resolvedParams = await params;

    return (
        <Suspense fallback={<h1>Loading similar movie...</h1>}>
            <MovieSimilar id={resolvedParams.id} />
        </Suspense>
    );
}
