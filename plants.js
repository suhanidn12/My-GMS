const plantData = {
    "rose": {
        scientificName: "Rosa",
        fertilizers: "NPK Fertilizer",
        watering: "Every 2-3 days",
        lightRequirements: "Full Sun",
        soilType: "Loamy Soil",
        growthHabit: "Upright Shrub"
    },
    "cactus": {
        scientificName: "Cactaceae",
        fertilizers: "Cactus Fertilizer",
        watering: "Every 2-3 weeks",
        lightRequirements: "Full Sun",
        soilType: "Sandy Soil",
        growthHabit: "Succulent"
    },
    "basil": {
        scientificName: "Ocimum basilicum",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Herbaceous"
    },
    "sunflower": {
        scientificName: "Helianthus annuus",
        fertilizers: "Balanced Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Tall Annual"
    },
    "fern": {
        scientificName: "Pteridophyta",
        fertilizers: "Liquid Fertilizer",
        watering: "Every 2-3 days",
        lightRequirements: "Partial Shade",
        soilType: "Moist, Well-Drained Soil",
        growthHabit: "Vascular Plant"
    },
    "tomato": {
        scientificName: "Solanum lycopersicum",
        fertilizers: "Tomato Fertilizer",
        watering: "Every 2-3 days",
        lightRequirements: "Full Sun",
        soilType: "Rich, Well-Drained Soil",
        growthHabit: "Vining or Bush"
    },
    "cactus": {
        scientificName: "Cactaceae",
        fertilizers: "Cactus Fertilizer",
        watering: "Every 2-3 weeks",
        lightRequirements: "Full Sun",
        soilType: "Sandy Soil",
        growthHabit: "Succulent"
    },
    "basil": {
        scientificName: "Ocimum basilicum",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Herbaceous"
    },
    "sunflower": {
        scientificName: "Helianthus annuus",
        fertilizers: "Balanced Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Tall Annual"
    },
    "fern": {
        scientificName: "Pteridophyta",
        fertilizers: "Liquid Fertilizer",
        watering: "Every 2-3 days",
        lightRequirements: "Partial Shade",
        soilType: "Moist, Well-Drained Soil",
        growthHabit: "Vascular Plant"
    },
    "tomato": {
        scientificName: "Solanum lycopersicum",
        fertilizers: "Tomato Fertilizer",
        watering: "Every 2-3 days",
        lightRequirements: "Full Sun",
        soilType: "Rich, Well-Drained Soil",
        growthHabit: "Vining or Bush"
    },
    "marigold": {
        scientificName: "Tagetes",
        fertilizers: "All-Purpose Fertilizer",
        watering: "Once a week",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Annual Flower"
    },
    "mint": {
        scientificName: "Mentha",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Partial Shade",
        soilType: "Moist, Well-Drained Soil",
        growthHabit: "Herbaceous Perennial"
    },
    "chilies": {
        scientificName: "Capsicum",
        fertilizers: "Balanced Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Bushy"
    },
    "okra": {
        scientificName: "Abelmoschus esculentus",
        fertilizers: "NPK Fertilizer",
        watering: "Every 2-3 days",
        lightRequirements: "Full Sun",
        soilType: "Loamy Soil",
        growthHabit: "Tall Annual"
    },
    "pomegranate": {
        scientificName: "Punica granatum",
        fertilizers: "NPK Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Shrub or Small Tree"
    },
    "bitter gourd": {
        scientificName: "Momordica charantia",
        fertilizers: "Organic Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Climbing Vine"
    },
    "pumpkin": {
        scientificName: "Cucurbita pepo",
        fertilizers: "Compost or Organic Fertilizer",
        watering: "Every 2-3 days",
        lightRequirements: "Full Sun",
        soilType: "Rich, Well-Drained Soil",
        growthHabit: "Vining Plant"
    },
    "zinnia": {
        scientificName: "Zinnia elegans",
        fertilizers: "All-Purpose Fertilizer",
        watering: "Once a week",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Annual Flower"
    },
    "coriander": {
        scientificName: "Coriandrum sativum",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Herbaceous Annual"
    },
    "sage": {
        scientificName: "Salvia officinalis",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Perennial Herb"
    },
    "thyme": {
        scientificName: "Thymus vulgaris",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Perennial Herb"
    },
    "ginger": {
        scientificName: "Zingiber officinale",
        fertilizers: "Organic Fertilizer",
        watering: "Every 2-3 days",
        lightRequirements: "Partial Shade",
        soilType: "Loamy Soil",
        growthHabit: "Herbaceous Perennial"
    },
    "turmeric": {
        scientificName: "Curcuma longa",
        fertilizers: "Organic Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Partial Shade",
        soilType: "Well-Drained Soil",
        growthHabit: "Herbaceous Perennial"
    },
    "curry leaf": {
        scientificName: "Murraya koenigii",
        fertilizers: "Organic Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Shrub"
    },
    "lemon": {
        scientificName: "Citrus limon",
        fertilizers: "Citrus Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Small Tree"
    },
    "banana": {
        scientificName: "Musa",
        fertilizers: "Banana Fertilizer",
        watering: "Every 2-3 days",
        lightRequirements: "Full Sun",
        soilType: "Rich, Well-Drained Soil",
        growthHabit: "Herbaceous Perennial"
    },
    "papaya": {
        scientificName: "Carica papaya",
        fertilizers: "Organic Fertilizer",
        watering: "Every 2-3 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Tree"
    },
    "guava": {
        scientificName: "Psidium guajava",
        fertilizers: "NPK Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Loamy Soil",
        growthHabit: "Shrub or Small Tree"
    },
    "mango": {
        scientificName: "Mangifera indica",
        fertilizers: "Mango Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Tree"
    },
    "jackfruit": {
        scientificName: "Artocarpus heterophyllus",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Loamy Soil",
        growthHabit: "Tree"
    },
    "pulses": {
        scientificName: "Various species",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Annual"
    },
    "fenugreek": {
        scientificName: "Trigonella foenum-graecum",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Herbaceous Annual"
    },
    "mustard": {
        scientificName: "Brassica",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Annual"
    },
    "beetroot": {
        scientificName: "Beta vulgaris",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Loamy Soil",
        growthHabit: "Biennial"
    },
    "radish": {
        scientificName: "Raphanus sativus",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Annual"
    },
    "carrot": {
        scientificName: "Daucus carota",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Sandy Loam",
        growthHabit: "Biennial"
    },
    "onion": {
        scientificName: "Allium cepa",
        fertilizers: "Organic Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Loamy Soil",
        growthHabit: "Bulb"
    },
    "garlic": {
        scientificName: "Allium sativum",
        fertilizers: "Organic Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Bulb"
    },
    "broccoli": {
        scientificName: "Brassica oleracea var. italica",
        fertilizers: "Organic Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Loamy Soil",
        growthHabit: "Biennial"
    },
    "cauliflower": {
        scientificName: "Brassica oleracea var. botrytis",
        fertilizers: "Organic Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Loamy Soil",
        growthHabit: "Biennial"
    },
    "spinach": {
        scientificName: "Spinacia oleracea",
        fertilizers: "Organic Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Annual"
    },
    "kale": {
        scientificName: "Brassica oleracea var. sabellica",
        fertilizers: "Organic Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Loamy Soil",
        growthHabit: "Biennial"
    },
    "lettuce": {
        scientificName: "Lactuca sativa",
        fertilizers: "Organic Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Annual"
    },
    "sweet potato": {
        scientificName: "Ipomoea batatas",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Sandy Loam",
        growthHabit: "Vining Plant"
    },
    "potato": {
        scientificName: "Solanum tuberosum",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Loamy Soil",
        growthHabit: "Tuber"
    },
    "sweet corn": {
        scientificName: "Zea mays",
        fertilizers: "Corn Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Annual"
    },
    "watermelon": {
        scientificName: "Citrullus lanatus",
        fertilizers: "Organic Fertilizer",
        watering: "Every 2-3 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Vining Plant"
    },
    "muskmelon": {
        scientificName: "Cucumis melo",
        fertilizers: "Organic Fertilizer",
        watering: "Every 2-3 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Vining Plant"
    },
    "grapes": {
        scientificName: "Vitis vinifera",
        fertilizers: "Grape Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Climbing Vine"
    },
    "strawberry": {
        scientificName: "Fragaria × ananassa",
        fertilizers: "Balanced Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Perennial"
    },
    "blueberry": {
        scientificName: "Vaccinium corymbosum",
        fertilizers: "Acidic Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained, Acidic Soil",
        growthHabit: "Shrub"
    },
    "fig": {
        scientificName: "Ficus carica",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Tree or Shrub"
    },
    "cherry": {
        scientificName: "Prunus avium",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Tree"
    },
    "peach": {
        scientificName: "Prunus persica",
        fertilizers: "NPK Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Tree"
    },
    "apricot": {
        scientificName: "Prunus armeniaca",
        fertilizers: "NPK Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Tree"
    },
    "coconut": {
        scientificName: "Cocos nucifera",
        fertilizers: "Coconut Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Tree"
    },
    "palak": {
        scientificName: "Beta vulgaris var. cicla",
        fertilizers: "Organic Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Annual"
    },
    "sorrel": {
        scientificName: "Rumex acetosa",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Partial Shade",
        soilType: "Well-Drained Soil",
        growthHabit: "Perennial"
    },
    "leek": {
        scientificName: "Allium ampeloprasum",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Biennial"
    },
    "chard": {
        scientificName: "Beta vulgaris var. cicla",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Biennial"
    },
    "amaranth": {
        scientificName: "Amaranthus",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Annual"
    },
    "cowpea": {
        scientificName: "Vigna unguiculata",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Climbing or Bushy"
    },
    "yardlong bean": {
        scientificName: "Vigna unguiculata subsp. sesquipedalis",
        fertilizers: "Organic Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Climbing Vine"
    },
    "black-eyed pea": {
        scientificName: "Vigna unguiculata",
        fertilizers: "Organic Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Bushy"
    },
    "fennel": {
        scientificName: "Foeniculum vulgare",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Biennial"
    },
    "dill": {
        scientificName: "Anethum graveolens",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Annual"
    },
    "tarragon": {
        scientificName: "Artemisia dracunculus",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Perennial"
    },
    "chive": {
        scientificName: "Allium schoenoprasum",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Perennial"
    },
    "pepper": {
        scientificName: "Capsicum annuum",
        fertilizers: "Balanced Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Bushy"
    },
    "hops": {
        scientificName: "Humulus lupulus",
        fertilizers: "Organic Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Climbing Vine"
    },
    "sorrel": {
        scientificName: "Rumex acetosa",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Partial Shade",
        soilType: "Well-Drained Soil",
        growthHabit: "Perennial"
    },
    "jasmine": {
        scientificName: "Jasminum",
        fertilizers: "Balanced Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun to Partial Shade",
        soilType: "Well-Drained Soil",
        growthHabit: "Climbing Vine"
    },
    "lotus": {
        scientificName: "Nelumbo nucifera",
        fertilizers: "Aquatic Fertilizer",
        watering: "Keep soil moist",
        lightRequirements: "Full Sun",
        soilType: "Clay Soil",
        growthHabit: "Aquatic Perennial"
    },
    "hibiscus": {
        scientificName: "Hibiscus rosa-sinensis",
        fertilizers: "NPK Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Shrub"
    },
    "chrysanthemum": {
        scientificName: "Chrysanthemum morifolium",
        fertilizers: "Balanced Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Perennial"
    },
    "dahlia": {
        scientificName: "Dahlia pinnata",
        fertilizers: "NPK Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Loamy Soil",
        growthHabit: "Perennial"
    },
    "pansy": {
        scientificName: "Viola tricolor var. hortensis",
        fertilizers: "All-Purpose Fertilizer",
        watering: "Once a week",
        lightRequirements: "Partial Shade",
        soilType: "Well-Drained Soil",
        growthHabit: "Annual"
    },
    "snapdragon": {
        scientificName: "Antirrhinum majus",
        fertilizers: "All-Purpose Fertilizer",
        watering: "Once a week",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Biennial"
    },
    "foxglove": {
        scientificName: "Digitalis purpurea",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Partial Shade",
        soilType: "Well-Drained Soil",
        growthHabit: "Biennial"
    },
    "lilac": {
        scientificName: "Syringa vulgaris",
        fertilizers: "Balanced Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Shrub"
    },
    "lavender": {
        scientificName: "Lavandula",
        fertilizers: "Cactus Fertilizer",
        watering: "Every 7-10 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Shrub"
    },
    "sage": {
        scientificName: "Salvia officinalis",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Perennial Herb"
    },
    "oregano": {
        scientificName: "Origanum vulgare",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Perennial Herb"
    },
    "borage": {
        scientificName: "Borago officinalis",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Annual"
    },
    "chamomile": {
        scientificName: "Matricaria chamomilla",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Annual"
    },
    "marjoram": {
        scientificName: "Origanum majorana",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Perennial Herb"
    },
    "rhubarb": {
        scientificName: "Rheum rhabarbarum",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Partial Shade",
        soilType: "Well-Drained Soil",
        growthHabit: "Perennial"
    },
    "walnut": {
        scientificName: "Juglans regia",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Tree"
    },
    "almond": {
        scientificName: "Prunus dulcis",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Tree"
    },
    "kiwi": {
        scientificName: "Actinidia deliciosa",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Climbing Vine"
    },
    "date palm": {
        scientificName: "Phoenix dactylifera",
        fertilizers: "Organic Fertilizer",
        watering: "Every 5-7 days",
        lightRequirements: "Full Sun",
        soilType: "Sandy Soil",
        growthHabit: "Tree"
    },
    "chili pepper": {
        scientificName: "Capsicum annuum",
        fertilizers: "Balanced Fertilizer",
        watering: "Every 3-4 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Bushy"
    },
    "squash": {
        scientificName: "Cucurbita pepo",
        fertilizers: "Organic Fertilizer",
        watering: "Every 2-3 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Vining Plant"
    },
    "courgette": {
        scientificName: "Cucurbita pepo",
        fertilizers: "Organic Fertilizer",
        watering: "Every 2-3 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Vining Plant"
    },
    "pumpkin": {
        scientificName: "Cucurbita maxima",
        fertilizers: "Organic Fertilizer",
        watering: "Every 2-3 days",
        lightRequirements: "Full Sun",
        soilType: "Well-Drained Soil",
        growthHabit: "Vining Plant"
}};

document.getElementById('showDetails').addEventListener('click', function () {
    const plantName = document.getElementById('plantName').value.trim();
    const plantInfo = document.getElementById('plantInfo');
    const notFoundContainer = document.getElementById('notFoundContainer');

    if (plantName) {
        // Replace this with actual logic to fetch plant details from the database
        const plantDetails = getPlantDetails(plantName); // Assume this is a function that returns plant details or null if not found

        if (plantDetails) {
            // Display plant details
            plantInfo.textContent = `Details for ${plantName}: ${plantDetails}`;
            plantInfo.classList.remove('hidden');
            notFoundContainer.classList.add('hidden');
        } else {
            // Show "Plant Not Found" container
            plantInfo.classList.add('hidden');
            notFoundContainer.classList.remove('hidden');
        }
    } else {
        // Handle empty input case
        plantInfo.classList.add('hidden');
        notFoundContainer.classList.add('hidden');
    }
});

document.getElementById('submitPlant').addEventListener('click', function () {
    const plantNameInput = document.getElementById('submitPlantName');
    const notification = document.getElementById('notification');

    // Retrieve the value from the input field and trim whitespace
    const plantName = plantNameInput.value.trim();

    if (plantName.length > 0) {
        // Display the success message
        notification.textContent = `The plant "${plantName}" has been submitted successfully and will be added soon.`;
        notification.className = 'success';
        notification.style.display = 'block';

        // Clear the input field
        plantNameInput.value = '';
    } else {
        // Display an error message
        notification.textContent = 'Please enter a plant name before submitting.';
        notification.className = 'error';
        notification.style.display = 'block';
    }

    // Optional: Hide the notification after 5 seconds
    setTimeout(() => {
        notification.style.display = 'none';
    }, 5000);
});

document.getElementById('showDetails').addEventListener('click', () => {
    const plantName = document.getElementById('plantName').value.toLowerCase();
    const infoDiv = document.getElementById('plantInfo');
    const alarmButton = document.getElementById('setAlarm');

    if (plantData[plantName]) {
        const { scientificName, fertilizers, watering, lightRequirements, soilType, growthHabit } = plantData[plantName];
        infoDiv.innerHTML = `
            <h2>${plantName.charAt(0).toUpperCase() + plantName.slice(1)}</h2>
            <p><strong>Scientific Name:</strong> ${scientificName}</p>
            <p><strong>Fertilizers Needed:</strong> ${fertilizers}</p>
            <p><strong>Watering Frequency:</strong> ${watering}</p>
            <p><strong>Light Requirements:</strong> ${lightRequirements}</p>
            <p><strong>Soil Type:</strong> ${soilType}</p>
            <p><strong>Growth Habit:</strong> ${growthHabit}</p>
        `;
        infoDiv.classList.remove('hidden');
        alarmButton.classList.remove('hidden');
    } else {
        infoDiv.innerHTML = `<p>This plant is not available for gardening in your home garden. Try any other plant for details. </p>`;
        infoDiv.classList.remove('hidden');
        alarmButton.classList.add('hidden');
    }

});
