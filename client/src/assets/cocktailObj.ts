export interface CocktailIngredient {
    name: string,
    amount: number,
    unit?: string,
    subingredients?: CocktailIngredient[],
    subingredientPostLink?: string
};

export interface CocktailData {
    id: number,
    cocktailName: string,
    image?: string,
    tagLine?: string,
    author: string,
    description: string,
    region?: string,
    glassware: string,
    season: string,
    ingredients: CocktailIngredient[],
    instructions: string[],
    postDate: string,
    originallyFrom?: string
}

export const cocktailDB: CocktailData[] = [
    {id: 1, cocktailName: 'Forged By Sunshine', tagLine: '', author: 'Meghan McCaskill', description: 'A floral berry forward classic martini with a hint of umami on the finish.',
        region: 'Central/North Florida',
        image: 'forged_by_sunshine01.jpg',
        glassware: 'Martini Glass',
        season: 'Year-Round',
        ingredients: [
            {name: 'Bombay Gin', amount: 2, unit: 'oz'},
            {name: 'Florida Foraged Vermouth', amount: 1.5, unit: 'oz'},
            {name: 'Mushroom Bitters', amount: 3, unit: 'dashes'},
            {name: 'Golden Berry', amount: 1}
        ],
        instructions: [
            'In a mixing glass, combine the Vermouth, Bombay Gin, and Mushroom Bitters. Top with ice.',
            'Stir the mixture until properly dilluted.',
            'Strain the contents of the glass into a chilled Martini Glass.',
            'Garnish with the Golden Berry'
        ],
        postDate: '9/8/2020'
    },
    {id: 2, cocktailName: 'Rose Sip 75', tagLine: '', author: 'Rachel Ford', description: 'Smooth, balanced, and clever, with a hint of effervescence.',
        region: '',
        image: 'rose_sip75_img01.jpg',
        glassware: 'Champagne Flute',
        season: 'Year-Round',
        ingredients: [
            {name: 'Tanqueray Gin', amount: 1, unit: 'oz'},
            {name: 'Rose Hip Syrup', amount: 0.5, unit: 'oz'},
            {name: 'Sumac-ade', amount: 0.5, unit: 'oz'},
            {name: 'Sparkling Rose', amount: 2, unit: 'oz'},
            {name: 'Rose Hips', amount: 3, unit: 'halved'}
        ],
        instructions: [
            'In a shaker tin combine Gin, Rose Hip Syrup, and Sumac-ade, finish with ice.',
            'Shake the mixture until properly dilluted.',
            'Strain the contents of the glass into a champagne flute.',
            'Top with sparkling rose.',
            'Garnish with 3 halved rose hips.'
        ],
        postDate: '9/8/2020',
        originallyFrom: 'The Wildcrafted Cocktail'
    },
    {id: 3, cocktailName: 'The Pirate King', tagLine: 'Named after Elizabeth Swann, of Pirates of the Caribbean.', author: 'Ellen Zachos', description: 'A refreshing yet spicy caribbean style cocktail.',
        region: 'Caribbean',
        image: 'pirate_king_img01.jpg',
        glassware: 'Rocks Glass',
        season: 'Year-Round',
        ingredients: [
            {name: 'Balvenie Caribbean Cask', amount: 3, unit: 'oz'},
            {name: 'Spicebush Dram', amount: 1.5, unit: 'oz'},
            {name: 'Wild Ginger Syrup', amount: 1, unit: 'oz'},
            {name: 'Lime Wedge', amount: 1,},
        ],
        instructions: [
            'In a shaker tin combine Whisky, Spicebush Dram, Ginger Syrup, and ice.',
            'Shake the mixture for 30 seconds.',
            'Strain the contents into a rocks glass.',
            'Squeeze the lime into the drink and stir.',
            'Optionally: Garnish with Lime.'
        ],
        postDate: '9/8/2020',
        originallyFrom: 'The Wildcrafted Cocktail'
    },
    {id: 4, cocktailName: 'The Pumpkin and Carrot Love-In', tagLine: 'Autumn winter cocktail, often served around Halloween.', author: 'Lottie, Muir', description: 'A sweet earthy smokeiness that balanced by citrus.',
        region: 'United Kingdom',
        image: 'pumpkin_carrot_love_img01.jpg',
        glassware: 'Collins Glass',
        season: 'Autumn',
        ingredients: [
            {name: 'Dark Spiced Rum', amount: 1.5, unit: 'tbsp'},
            {name: 'Roasted Carrot and Pumpkin Juice Puree', amount: 1.5, unit: 'tbsp'},
            {name: 'Charred Sage Syrup', amount: 1, unit: 'tbsp'},
            {name: 'Lemon Juice', amount: 1, unit: 'tsp'},
            {name: 'Fresh Orange Juice', amount: 2, unit: 'tsp'},
            {name: 'Ginger Beer', amount: 2, unit: 'oz'},
            {name: 'Baby Carrot with top', amount: 1}
        ],
        instructions: [
            'Fill the glass with ice, add baby carrot.',
            'In a shaker tin combine the Rum, Roasted Carrot and Pumpkin Juice Puree, Charred Sage Syrup, lemon, and orange juice.',
            'Fill shaker 2/3 of the way with ice.',
            'Shake hard for 20 seconds.',
            'Strain into the collins glass, over ice.',
            'Top with Ginger Beer.'
        ],
        postDate: '9/8/2020',
        originallyFrom: 'Wild Cocktails - From The Midnight Apothecary'
    },
    
]

