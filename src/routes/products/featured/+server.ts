import type { Product } from './../../../types/vendure'
import featuredProducts from './featuredProducts.json'

/** @type {import('./$types').RequestHandler} */
export function GET(_req) {
    
    return new Response(
        JSON.stringify(
            featuredProducts as unknown as Product[]
        )
    );
}


