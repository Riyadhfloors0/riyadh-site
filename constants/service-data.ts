export interface ServiceData {
  id: string
  title: string
  mainHeading: string
  description: string
  gridImages: string[]
  featuresTitle: string
  features: {
    title: string
    description: string
  }[]
  whyChooseTitle: string
  whyChoosePoints: {
    title: string
    description: string
  }[]
  whereUsedTitle: string
  advantages: string[]
  usageDescription: string
  featuredImage: string
  featuredImageTitle: string
  finalUsageTitle: string
  finalUsageDescription: string
  closingText?: string
}

export const servicesData: ServiceData[] = [
  {
    id: "stamped-concrete",
    title: "Stamped Concrete",
    mainHeading: "What is stamped concrete?",
    description:
      "Stamped colored concrete is the ideal choice for individuals seeking flooring that combines beauty, durability, and versatility. It transforms the look of outdoor spaces into an attractive and modern work of art where functionality meets aesthetics. Whether you're considering patios, gardens, walkways, or parking lots, stamped concrete offers a reliable solution that combines beauty and strength at all times.",

    // Image grid - using the actual grid image from the upload
    gridImages: [
      "/stamped-concrete/1.png",
      "/stamped-concrete/2.png",
      "/stamped-concrete/3.png",
      "/stamped-concrete/4.webp",
      "/stamped-concrete/5.png",
      "/stamped-concrete/6.webp",
      "/stamped-concrete/7.png",
      "/stamped-concrete/8.webp",
      "/stamped-concrete/9.webp",
    ],

    // Features section
    featuresTitle: "Why Does Riyadh Floors' Stamped Concrete Flooring Surpass Other Traditional Flooring?",
    features: [
      {
        title: "Durability and Resistance",
        description:
          "Stamped concrete floors are resistant to various weathering factors such as heat, cold, moisture, and oils, making them ideal for high-traffic areas. They are not easily affected by drilling or damage, which means they last for a long time without the need for continuous maintenance.",
      },
      {
        title: "Aesthetic Diversity",
        description:
          "Stamped concrete allows you to choose from a wide range of designs and colors, including those that mimic natural stone, brick, tile, or wood. You can customize the floor in a style that reflects your personal taste and the character of your home or project.",
      },
      {
        title: "Speed of Execution",
        description:
          "Unlike other materials, stamped concrete requires less time for installation. Thanks to the ease of implementation and the lack of need for expensive maintenance, you can save time and money while getting a great end result.",
      },
      {
        title: "Best Value for Money",
        description:
          "Stamped concrete is one of the best solutions when it comes to value for money, as it provides a combination of high quality, attractive appearance, and reasonable cost. It is not only beautiful and effective but also increases the value of the property and leaves a distinctive impression on visitors and customers.",
      },
      {
        title: "Resistance to Staining, Cracking, and Settling",
        description:
          "The stamped concrete we offer is not affected by staining or settling and remains strong and durable for long periods.",
      },
      {
        title: "Resistance to Weed and Plant Growth",
        description:
          "Our modern designs prevent the growth of unwanted weeds and plants, making the floors cleaner and more practical.",
      },
    ],

    // Why Choose section
    whyChooseTitle: "Why Choose Riyadh Floors to Implement Stamped Concrete Floors?",
    whyChoosePoints: [
      {
        title: "Extensive Experience and a Distinguished Portfolio",
        description:
          "With more than 400 successful projects in the Kingdom, we have the expertise that guarantees you stamped concrete floors of unparalleled quality.",
      },
      {
        title: "Fast and Efficient Execution",
        description: "We provide customized and ready-made solutions quickly, without sacrificing quality.",
      },
      {
        title: "Diverse Design Catalog",
        description:
          "We offer a stamped concrete catalog containing a wide range of designs and colors that cater to all tastes and suit all spaces.",
      },
      {
        title: "Competitive Prices",
        description: "We offer the best prices while maintaining the highest quality standards in the market.",
      },
      {
        title: "Guaranteed Professional Service",
        description:
          "With over 12 years of experience in implementing stamped concrete projects, we offer you precisely designed solutions to ensure the highest levels of quality and professionalism.",
      },
    ],

    // Where is it used section
    whereUsedTitle: "Where is stamped concrete used?",
    advantages: [
      "High speed of implementation.",
      "Variety of colors according to the customer's request.",
      "High resistance to wear, friction and weather factors.",
      "Less expensive than ceramic, porcelain and marble.",
      "Multiple shapes and designs.",
      "Easy to maintain.",
    ],
    usageDescription:
      "Stamped concrete is used and implemented in: Villas, palaces and residential complexes. Rest houses, public squares, gardens and farms. Streets, walkways, sidewalks and parking lots.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    featuredImageTitle: "Stamped Concrete",

    // Final section
    finalUsageTitle: "Where is stamped concrete used?",
    finalUsageDescription:
      "Printed concrete is used and implemented in: Villas, palaces and residential complexes. Rest houses, public squares, gardens and farms. Streets, walkways, sidewalks and parking lots.",

    closingText:
      "If you want to take advantage of these exclusive benefits, don't hesitate to contact us at Riyadh Floors Company, where we offer you stamped concrete flooring services with the highest level of quality, professionalism, and warranty.",
  },

  {
    id: "resin-bound",
    title: "RESIN BOUND",
    mainHeading: "What is Resin-Bound Surfacing?",
    description:
      "Resin Bound is an advanced flooring system that uses a blend of natural resins and supporting components to create strong, durable, and visually appealing floors. This type of flooring is characterized by its high resistance to wear and scratches, making it ideal for use in high-traffic areas, sports facilities, and commercial areas. In addition to its durability, Resin Bound floors offer a modern and elegant look that can be customized with multiple colors and patterns to suit different tastes.",

    gridImages: [
      "/resin-bound/1.png",
      "/resin-bound/2.webp",
      "/resin-bound/3.webp",
      "/resin-bound/4.webp",
      "/resin-bound/5.webp",
      "/resin-bound/6.png",
      "/resin-bound/7.webp",
      "/resin-bound/8.webp",
      "/resin-bound/9.png"

    ],

    featuresTitle: "Why Choose Resin-Bound Surfacing?",
    features: [
      {
        title: "Exceptional Durability",
        description:
          "Resin Bound floors have exceptional hardness that can withstand harsh conditions such as heavy weights and intensive movement. This feature makes Resin Bound the ideal choice for places that require high resistance to wear, such as parking lots, playgrounds, and commercial work areas.",
      },
      {
        title: "High Resistance to Weather Conditions",
        description:
          "Thanks to its resistance to various weather factors, such as heat, humidity, and UV rays, Resin Bound floors maintain their durability and beauty even in harsh outdoor environments. They are also not affected by water or climate changes, making them a reliable option in exposed areas.",
      },
      {
        title: "Flexible and Aesthetic Design",
        description:
          "Resin Bound floors can be customized to suit the different tastes of customers, both in terms of colors and patterns. You can choose innovative designs that are suitable for commercial or residential spaces to add a distinctive artistic touch to the space.",
      },
    ],

    whyChooseTitle: "Why Choose Riyadh Floors to Implement Resin Bound Floors?",
    whyChoosePoints: [
      {
        title: "Extensive Experience and a Distinguished Portfolio",
        description:
          "With over 12 years of experience, we specialize in providing the best flooring solutions that effectively meet the needs of our clients.",
      },
      {
        title: "Fast and Accurate Execution",
        description:
          "We use the latest implementation techniques to ensure you get Resin Bound floors with the highest level of accuracy and speed, while maintaining the highest quality standards.",
      },
      {
        title: "Customized Designs for Each Project",
        description:
          "We provide flexible designs that suit the needs of each client. Whether you are looking for an elegant floor for a commercial project or a durable surface for a sports facility, we guarantee you a design that suits your taste.",
      },
      {
        title: "Competitive Prices",
        description:
          "We offer the best prices while maintaining high quality, ensuring you get the best solutions at the lowest cost.",
      },
    ],

    whereUsedTitle: "Areas of Use for Resin Bound",
    advantages: [
      "Modern and Luxurious Look",
      "Ease of Implementation",
      "Long-Term Sustainability",
      "Additional Safety",
      "Weather Resistance",
      "Customizable Design",
    ],
    usageDescription:
      "Outdoor Spaces, Sports Fields, Commercial Areas, Industrial Areas - thanks to their durability and strength, Resin Bound floors are an excellent choice for various applications.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    featuredImageTitle: "Resin-bound surfacing",

    finalUsageTitle: "Benefits of Using Resin Bound",
    finalUsageDescription:
      "Modern and Luxurious Look, Ease of Implementation, Long-Term Sustainability, Additional Safety with non-slip surface providing high level of safety in areas that require safe and stable movement.",

    closingText: "",
  },

  {
    id: "terrazzo",
    title: "TERRAZZO",
    mainHeading: "What is Terrazzo Tiles?",
    description:
      "Terrazzo floors are a distinctive blend of marble, granite, or quartz chips combined with a cementitious or epoxy binder, resulting in durable floors with a unique aesthetic appearance. Terrazzo floors are considered an ideal choice for both indoor and outdoor spaces, thanks to their durability and resistance to weather conditions.",

    gridImages: [
      "/terrazo/1.png",
      "/terrazo/2.png",
      "/terrazo/3.png",
      "/terrazo/4.png",
      "/terrazo/5.webp",
      "/terrazo/6.webp",
      "/terrazo/7.webp",
      "/terrazo/8.png",
      "/terrazo/9.webp"
    ],

    featuresTitle: "What are the Features of Terrazzo Floors?",
    features: [
      {
        title: "High Durability",
        description:
          "Terrazzo floors are known for their high durability, making them capable of withstanding intensive use and continuous movement in commercial and industrial places. In addition, terrazzo tiles are resistant to wear and scratches, making them suitable for use in courtyards, bathrooms, and even kitchens.",
      },
      {
        title: "Resistance to Environmental Factors",
        description:
          "Terrazzo is known for its high resistance to environmental factors such as moisture and heat, making it suitable for outdoor flooring applications such as courtyard tiles or terrazzo for patios. Whether you are looking for terrazzo tiles for the courtyard or terrazzo for bathrooms, it offers a practical and aesthetic solution at the same time.",
      },
      {
        title: "Artistic and Aesthetic Design",
        description:
          "Terrazzo offers great versatility in designs and colors, where you can choose terrazzo tiles that suit your taste and add a unique artistic touch to your project. Terrazzo can also be used in kitchens to add a luxurious aesthetic touch that combines elegance and durability.",
      },
      {
        title: "Ease of Maintenance and Cleaning",
        description:
          "Terrazzo floors do not require intensive maintenance thanks to their high resistance to stains and scratches. You can easily clean them using regular detergents, making them an ideal choice for places that need to maintain constant cleanliness, such as bathrooms and kitchens.",
      },
    ],

    whyChooseTitle: "Why Choose Riyadh Floors to Implement Terrazzo Floors?",
    whyChoosePoints: [
      {
        title: "Extensive Experience in Terrazzo Design and Installation",
        description:
          "Thanks to our long experience in the field of terrazzo floor design, we guarantee you an impressive result, whether you are looking for terrazzo tiles for courtyards or luxurious interior designs. We have worked on many successful projects, making us a trusted choice.",
      },
      {
        title: "High Quality at Competitive Prices",
        description:
          "We guarantee to provide the highest quality at the best prices, providing you with excellent value for your money. We offer competitive prices for the design and installation of terrazzo tiles to suit the budgets of different clients.",
      },
      {
        title: "Customized Designs for Each Client",
        description:
          "We offer you the freedom to choose from a wide range of designs and colors that suit your taste and align with the needs of your space, whether it's terrazzo floors for your home or a commercial project.",
      },
    ],

    whereUsedTitle: "What are the Areas of Use for Terrazzo?",
    advantages: [
      "Long-Term Value",
      "Customized Designs",
      "Resistance to Wear and Scratches",
      "Environmentally Friendly",
      "Moisture Resistance",
      "Heat Resistance",
    ],
    usageDescription:
      "Terrazzo Tiles for Courtyards, Terrazzo Floors for Homes, Terrazzo in Bathrooms and Kitchens, Terrazzo in Commercial Projects.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    featuredImageTitle: "Terrazzo Tile",

    finalUsageTitle: "What are the Benefits of Using Terrazzo?",
    finalUsageDescription:
      "Long-Term Value, Customized Designs, Resistance to Wear and Scratches, Environmentally Friendly - made from natural materials such as marble and granite.",

    closingText:
      "If you are looking for durable and beautiful terrazzo tiles that suit your needs, contact us at Riyadh Floors Company. We offer you the best prices and the highest levels of quality.",
  },

  {
    id: "exposed-aggregate",
    title: "EXPOSED AGGREGATE",
    mainHeading: "What is Exposed Aggregate Surfacing?",
    description:
      "Exposed aggregate is a type of exposed concrete flooring where the gravel or aggregate within the concrete is revealed after removing the top layer of cement. This process is done using various techniques such as washing, grinding, or brushing, to highlight the beauty of the natural aggregate embedded in the concrete. This type of flooring provides an elegant and modern look that enhances the aesthetics of interior and exterior spaces.",

    gridImages: [
      "/exposed-aggregate/1.png",
      "/exposed-aggregate/2.webp",
      "/exposed-aggregate/3.png",
      "/exposed-aggregate/4.webp",
      "/exposed-aggregate/5.webp",
      "/exposed-aggregate/6.webp",
      "/exposed-aggregate/7.webp",
      "/exposed-aggregate/8.webp",
      "/exposed-aggregate/9.webp"
    ],

    featuresTitle: "Features of Exposed Aggregate Floors",
    features: [
      {
        title: "Aesthetic Appeal",
        description:
          "Exposed aggregate floors offer a textured and attractive surface that reflects the beauty of natural gravel or aggregate. This type of flooring allows for a natural look that adds a touch of luxury to outdoor spaces such as walkways and gardens.",
      },
      {
        title: "Ease of Application",
        description:
          "Exposed aggregate floors are considered easy to apply, as the process of revealing the aggregate is simple and fast compared to other finishes, making it an ideal choice for large areas.",
      },
      {
        title: "Durability and Strength",
        description:
          "Exposed aggregate floors can withstand harsh weather conditions such as fluctuations in temperature and humidity. They are also resistant to oils, stains, and dust, making them ideal for walkways, streets, and commercial spaces that are exposed to intensive use.",
      },
      {
        title: "Design Versatility",
        description:
          "Exposed aggregate floors can be easily customized using different types of aggregate and colors, allowing for diverse designs that suit the client's needs.",
      },
      {
        title: "Slip Resistance",
        description:
          "Exposed aggregate floors are characterized by their rough surface, which provides high slip resistance, making them a safe option for areas around swimming pools, terraces, and sidewalks.",
      },
      {
        title: "Low Maintenance",
        description:
          "Thanks to their strength and durability, exposed aggregate floors require little maintenance compared to other decorative finishes, saving on maintenance costs in the long run.",
      },
    ],

    whyChooseTitle: "Why Choose Riyadh Floors to Implement Exposed Aggregate Floors?",
    whyChoosePoints: [
      {
        title: "Extensive Experience and Guaranteed Quality",
        description:
          "At Riyadh Floors, we have extensive experience in implementing exposed aggregate floors, and we have successfully provided specialized solutions suitable for many projects in the Kingdom.",
      },
      {
        title: "Accurate and Professional Execution",
        description:
          "We guarantee the implementation of exposed aggregate floors with speed and accuracy without compromising quality. We use the latest technologies to ensure the best results for our clients.",
      },
      {
        title: "Customized Designs Upon Request",
        description:
          "We offer flexible designs that suit the needs of each client, whether you are looking for flooring for walkways, commercial spaces, or even interior spaces.",
      },
      {
        title: "Competitive Prices",
        description:
          "We are keen on offering competitive prices that suit all budgets, allowing you to get the best value for your money.",
      },
    ],

    whereUsedTitle: "Areas of Use for Exposed Aggregate",
    advantages: [
      "Safety and Slip Resistance",
      "High Durability",
      "Color Variety",
      "Resistance to Stains and Oils",
      "Cost-Effective",
      "Weather Resistance",
    ],
    usageDescription:
      "Walkways and Roads, Terraces and Swimming Pools, Commercial Spaces, Interior Floors - due to their slip-resistant nature and durability.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    featuredImageTitle: "Concrete Surfacing",

    finalUsageTitle: "Benefits of Using Exposed Aggregate",
    finalUsageDescription:
      "Safety, High Durability, Color Variety, Resistance to Stains and Oils, Cost-Effective due to long lifespan and reduced need for maintenance.",

    closingText:
      "If you are looking for durable and attractive exposed aggregate floors, contact us at Riyadh Floors Company. We offer you the best prices and the highest levels of quality.",
  },

  {
    id: "polished-concrete",
    title: "POLISHED CONCRETE",
    mainHeading: "What is Brushed Concrete?",
    description:
      "Polished concrete floors are surfaces that are treated using advanced techniques to polish the concrete surface and make it smooth and shiny. The concrete is polished with specialized machines that remove the rough surface layer and reveal a smooth and reflective surface, giving the floors a modern and luxurious look. These floors are a distinctive choice for commercial and industrial places as well as modern homes.",

    gridImages: [
      "/polish-concrete/1.png",
      "/polish-concrete/2.png",
      "/polish-concrete/3.png",
      "/polish-concrete/4.png",
      "/polish-concrete/5.webp",
      "/polish-concrete/6.png",
      "/polish-concrete/7.png",
      "/polish-concrete/8.png",
      "/polish-concrete/9.webp"
    ],

    featuresTitle: "Features of Polished Concrete Floors:",
    features: [
      {
        title: "Modern and Elegant Beauty",
        description:
          "Polished concrete floors are characterized by their elegant and contemporary look that adds a touch of luxury to interior spaces. The degree of shine and design can be customized to reflect the client's taste and enhance the beauty of the spaces.",
      },
      {
        title: "High Durability",
        description:
          "Polished concrete floors are considered one of the most durable and robust floors, as they resist wear and friction even in environments with intensive use, such as commercial centers, warehouses, and offices. These floors can withstand heavy loads without being affected, making them an ideal choice for commercial and industrial spaces.",
      },
      {
        title: "Resistance to Wear and Scratches",
        description:
          "Thanks to the specialized polishing process, polished concrete floors acquire a surface resistant to wear and scratches. They are also resistant to chemicals and oils, making them ideal for use in industrial environments and warehouses.",
      },
      {
        title: "Ease of Maintenance and Cleaning",
        description:
          "One of the biggest advantages of polished concrete floors is that they do not require expensive maintenance. Thanks to the smooth and shiny surface, the floors can be easily cleaned using water and regular detergents. They are also resistant to stains and dust, which maintains their clean appearance for long periods.",
      },
      {
        title: "Cost-Effective",
        description:
          "Although polished concrete floors look luxurious and modern, they offer cost-effectiveness compared to other options such as marble or natural stone. They offer great value for money due to their long lifespan and low maintenance costs.",
      },
    ],

    whyChooseTitle: "Why Choose Riyadh Floors to Implement Polished Concrete?",
    whyChoosePoints: [
      {
        title: "Extensive Experience in Project Execution",
        description:
          "At Riyadh Floors, we have over 12 years of experience in providing polished concrete flooring solutions for a variety of projects. We have served many commercial and industrial establishments, making us the first choice in the Kingdom.",
      },
      {
        title: "Guaranteed Quality",
        description:
          "We are committed to providing the highest quality standards in implementing polished concrete floors, using the latest technologies and the best tools to ensure long-lasting results.",
      },
      {
        title: "Competitive Prices",
        description:
          "We offer distinctive solutions at competitive prices to suit different budgets. We also ensure to provide the best value for money, allowing you to get elegant and efficient floors at the lowest cost.",
      },
      {
        title: "Customized Designs",
        description:
          "We offer our clients the freedom to choose polished concrete floor designs that suit their needs. Whether you are looking for a modern or traditional look, we provide you with multiple options to suit your taste.",
      },
    ],

    whereUsedTitle: "What are the advantages of Polish Concrete floors?",
    advantages: [
      "Luxurious look: Polish Concrete flooring gives a modern, glossy look that adds a touch of luxury to any space",
      "Withstands extensive use: Flooring withstands heavy use and difficult conditions without the need for constant maintenance",
      "Easy maintenance: Thanks to its smooth surface, the floors can be easily cleaned using water and regular detergents",
      "Abrasion and scratch resistance: Polish Concrete flooring resists chemicals, oils and scratches, making it a practical choice for industrial spaces",
      "Economical cost: Polish Concrete flooring offers high value for money, making it a preferred choice for commercial and industrial spaces",
    ],
    usageDescription:
      "Commercial and Industrial Spaces, Modern Homes, Warehouses and Factories, Public Places - thanks to their durability and beauty.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    featuredImageTitle: "Polish Concrete floors",

    finalUsageTitle: "Areas of Use for Polished Concrete:",
    finalUsageDescription:
      "Commercial and Industrial Spaces, Modern Homes, Warehouses and Factories, Public Places - polished concrete floors are also used in public facilities such as airports and shopping malls due to their high resistance to wear and ease of maintenance.",

    closingText: "",
  },
  {
    id: "artificial-epoxy",
    title: "ARTIFICIAL EPOXY",
    mainHeading: "What is Epoxy Surfacing?",
    description:
      "Epoxy surfacing, a type of resinous flooring, has gained popularity in both industrial and residential settings. It involves applying a layer of epoxy resin over a concrete surface, resulting in a smooth, durable, and high-performance finish. Due to its resistance to abrasion and ease of upkeep, it's preferred in places such as kitchens, retail stores, garages, and warehouses.",

    gridImages: [
      "/artificial-epoxy/1.png",
      "/artificial-epoxy/2.png",
      "/artificial-epoxy/3.webp",
      "/artificial-epoxy/4.png",
      "/artificial-epoxy/5.webp",
      "/artificial-epoxy/6.png",
      "/artificial-epoxy/7.webp",
      "/artificial-epoxy/8.webp",
      "/artificial-epoxy/9.webp"
    ],

    featuresTitle: "Features",
    features: [
      {
        title: "Aesthetic Versatility",
        description:
          "Epoxy can be customised with different colours, textures, and patterns, including options that mimic stone, tile, or wood.",
      },
      {
        title: "Maintenance",
        description:
          "Due to its non-porous nature, epoxy is easy to clean. It is also resistant to cracking and chipping, leading it to need very minimal maintenance.",
      },
      {
        title: "Durability",
        description: "Epoxy has high strength and can withstand constant use, heavy equipment, and high temperatures.",
      },
      {
        title: "Resilience",
        description:
          "Because of its resistance to heat, water, oil and other spills, it's a perfect choice for indoor and outdoor spaces.",
      },
      {
        title: "Chemical Resistance",
        description:
          "Epoxy can withstand exposure to various chemicals, making it suitable for industrial environments where chemical spills are common.",
      },
    ],

    whyChooseTitle: "Where Can I Get Epoxy Surfacing?",
    whyChoosePoints: [
      {
        title: "Industrial and Commercial",
        description: "Manufacturing plants, warehouses, automotive facilities, and commercial kitchens.",
      },
      {
        title: "Residential",
        description: "Garages, basements, bathrooms, and kitchens.",
      },
      {
        title: "Public Spaces",
        description: "Schools, hospitals, and showrooms.",
      },
      {
        title: "Outdoor Areas",
        description: "Patios and walkways.",
      },
    ],

    whereUsedTitle: "What Are The Benefits of Applying Concrete Surfacing?",
    advantages: [
      "Cost-effective: It costs less money to tile your area with epoxy rather than other materials",
      "Environmentally friendly: Epoxy installation leaves less trash than others on floors as it's nonporous, and harsh chemicals aren't required",
      "Longevity: With proper installation, epoxy can last many years without significant degradation",
    ],
    usageDescription:
      "Epoxy surfacing is a high-performance and adaptable material that can be used in a variety of contexts, including commercial, residential, and industrial areas, and is a popular option for many environments due to its low maintenance requirements, durability, and attractive options.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    featuredImageTitle: "Epoxy surfacing",

    finalUsageTitle: "Applications of Epoxy Surfacing",
    finalUsageDescription:
      "Epoxy surfacing is suitable for industrial and commercial manufacturing plants, warehouses, automotive facilities, commercial kitchens, residential garages, basements, bathrooms, kitchens, public spaces like schools, hospitals, showrooms, and outdoor areas including patios and walkways.",

    closingText: "",
  },

  {
    id: "brushed-concrete",
    title: "BRUSHED CONCRETE",
    mainHeading: "What is Brushed Concrete?",
    description:
      "Brushed concrete is a special type of concrete flooring characterized by its brushed and slip-resistant surface, making it a practical and aesthetic solution at the same time. This type of concrete is implemented by defining the areas using wooden screeds. Then, the concrete is poured and leveled, after which the surface is brushed using a special tool while it is still wet, giving it a rough and brushed surface that adds a distinctive appearance and additional resistance to environmental factors.",

    gridImages: [
      "/broom-concrete/1.png",
      "/broom-concrete/2.png",
      "/broom-concrete/3.webp",
      "/broom-concrete/4.png",
      "/broom-concrete/5.png",
      "/broom-concrete/6.webp",
      "/broom-concrete/7.jpg",
      "/broom-concrete/8.webp",
      "/broom-concrete/9.webp"
    ],

    featuresTitle: "Features of Brushed Concrete",
    features: [
      {
        title: "Slip Resistant",
        description:
          "Brushed concrete is characterized by its rough surface, which provides high slip resistance, making it ideal for use in outdoor spaces such as walkways, building entrances, and sidewalks. This type of concrete ensures stability and safety even in wet or rainy conditions.",
      },
      {
        title: "High Durability",
        description:
          "Brushed concrete is distinguished by its ability to withstand harsh environmental factors, such as climate changes, high temperatures, and humidity. It is also resistant to wear and scratches, making it ideal for high-traffic areas and continuous use.",
      },
      {
        title: "Simple Maintenance",
        description:
          "Thanks to its strength, brushed concrete requires minimal maintenance over the years. It can be easily cleaned using water or regular detergents, making it a long-term economical option.",
      },
      {
        title: "Practical and Aesthetic Design",
        description:
          "Despite being very practical, brushed concrete can be customized to suit different designs, as it is available in multiple colors and adds an attractive appearance that complements exterior decors. The brushing pattern can be customized to add an artistic and aesthetic touch to large spaces.",
      },
    ],

    whyChooseTitle: "Why Choose Riyadh Floors to Implement Brushed Concrete?",
    whyChoosePoints: [
      {
        title: "Extensive Experience and Successful Track Record",
        description:
          "At Riyadh Floors, we offer brushed concrete solutions with high levels of quality, with over 12 years of experience in providing the best solutions for concrete floors. We have completed multiple projects in various fields, making us a trusted partner.",
      },
      {
        title: "Fast Execution with High Accuracy",
        description:
          "Thanks to our specialized team and advanced tools, we guarantee you the implementation of brushed concrete projects with speed and accuracy without compromising quality, saving you time and additional costs.",
      },
      {
        title: "Competitive Prices",
        description:
          "We offer the best prices in the market while maintaining the highest quality standards, making us a preferred choice for implementing brushed concrete at competitive prices and unparalleled quality.",
      },
      {
        title: "Customized Designs",
        description:
          "We provide customized designs to suit the needs of each client, whether you are looking for a modern or classic look, with flexibility in choosing colors and brushing patterns.",
      },
    ],

    whereUsedTitle: "Areas of Use for Brushed Concrete",
    advantages: [
      "Additional Safety: Thanks to its slip-resistant surface",
      "Excellent Durability: Withstands heavy loads and harsh weather conditions",
      "Cost-Effective: Economical option compared to other materials",
      "Flexibility in Design: Customizable brushing patterns and colors",
    ],
    usageDescription:
      "Walkways and Building Entrances, Sidewalks and Parking Lots, Public Spaces and Gardens, Patios and Balconies - providing safety and aesthetic appeal in all applications.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    featuredImageTitle: "Brushed Concrete",

    finalUsageTitle: "Benefits of Using Brushed Concrete",
    finalUsageDescription:
      "Additional Safety through slip-resistant surface, Excellent Durability against heavy loads and weather conditions, Cost-Effective solution compared to tiles or stone, and Flexibility in Design with customizable patterns and colors.",

    closingText: "",
  },

  {
    id: "microcement-topcrete",
    title: "MICROCEMENT AND TOP CONCRETE",
    mainHeading: "What are Topcrete and Microcement?",
    description:
      "Topcrete and microcement are two types of modern flooring that are characterized by beauty and durability. They are manufactured using treated and colored cementitious materials resistant to heat, moisture, and pressure. These floors add a modern and luxurious look to both interior and exterior spaces, making them an ideal choice for homes, commercial projects, and industrial facilities.",

    gridImages: [
      "/micro-cement/1.webp",
      "/micro-cement/2.png",
      "/micro-cement/3.png",
      "/micro-cement/4.png",
      "/micro-cement/5.png",
      "/micro-cement/6.webp",
      "/micro-cement/7.png",
      "/micro-cement/8.png",
      "/micro-cement/9.png"
    ],

    featuresTitle: "Features of Topcrete and Microcement Floors:",
    features: [
      {
        title: "Modern and Attractive Appearance",
        description:
          "Topcrete and microcement floors are available in multiple colors and shapes to suit all decors and tastes, allowing for customized designs that fit your space. These floors add a contemporary artistic touch to spaces, making them an ideal aesthetic masterpiece in restaurants, cafes, offices, and more.",
      },
      {
        title: "High Durability",
        description:
          "These floors are characterized by their superior ability to withstand shocks, scratches, and high temperatures, making them ideal for high-traffic areas such as exhibitions, shops, offices, and entertainment centers. Additionally, they are resistant to stains and oils, making them an ideal choice for kitchens and commercial areas.",
      },
      {
        title: "Ease of Application",
        description:
          "Topcrete and microcement floors can be easily applied to any surface without the need to remove the pre-existing material. They also do not require joints or seams, providing a seamless and elegant look.",
      },
      {
        title: "Environmentally Friendly",
        description:
          "These floors are considered an environmentally friendly option, as they are made using renewable natural materials and do not contain harmful chemicals. They also help in saving energy thanks to their ability to adapt to the ambient temperature.",
      },
      {
        title: "Easy Maintenance and Cleaning",
        description:
          "Topcrete and microcement floors require minimal maintenance, as they can be easily cleaned with a simple wipe using a damp cloth. This makes them an ideal choice for places that require constant cleanliness, such as restaurants and cafes.",
      },
    ],

    whyChooseTitle: "Why Choose Riyadh Floors to Implement Topcrete and Microcement?",
    whyChoosePoints: [
      {
        title: "Extensive Experience and Successful Track Record",
        description:
          "With over 12 years of experience, we guarantee you a professional execution of floors using Topcrete and microcement with the highest quality standards.",
      },
      {
        title: "Customized Designs for Each Project",
        description:
          "We offer customized designs to suit every project, whether you are looking for a modern or classic touch. We provide you with designs that fit your unique needs with attention to the finest details.",
      },
      {
        title: "Use of the Best Materials",
        description:
          "We are keen on using the best materials to ensure the quality and durability of the floors, guaranteeing you a product that lasts for many years without the need for expensive maintenance.",
      },
      {
        title: "Fast and Efficient Execution",
        description:
          "We are committed to the speedy execution of projects while maintaining the highest quality standards, ensuring that your floors are implemented on time and with minimal effort.",
      },
      {
        title: "Competitive Prices",
        description:
          "We provide the best flooring solutions at competitive prices, while maintaining the high quality that your projects deserve.",
      },
    ],

    whereUsedTitle: "Where to Use Topcrete and Microcement?",
    advantages: [
      "Restaurants and Cafes: Strong and durable, resistant to friction and scratches",
      "Exhibitions and Shops: Can withstand heavy weights and intensive use",
      "Offices and Entertainment Centers: Modern appearance, resistant to wear",
      "Residential Spaces: Adds luxury and comfort, resistant to stains and oils",
    ],
    usageDescription:
      "Restaurants and Cafes, Exhibitions and Shops, Offices and Entertainment Centers, Residential Spaces - ideal for all applications requiring durability and modern aesthetics.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    featuredImageTitle: "Microcement and Topcrete",

    finalUsageTitle: "Applications of Topcrete and Microcement",
    finalUsageDescription:
      "Perfect for restaurants and cafes due to strength and durability, exhibitions and shops for heavy-duty use, offices and entertainment centers for modern appearance, and residential spaces for luxury and comfort.",

    closingText:
      "If you want to transform your space into a masterpiece that combines beauty and practicality using Topcrete and microcement, do not hesitate to contact us at Riyadh Floors Company.",
  },

  {
    id: "colored-concrete",
    title: "COLORED CONCRETE",
    mainHeading: "Colored Concrete Service",
    description:
      "Colored concrete is a specialized type of concrete where distinctive colors and pigments are added to the concrete mix, resulting in floors with an attractive and diverse appearance. These floors combine the durability and strength that characterize traditional concrete, with artistic and aesthetic possibilities that add a unique touch to outdoor and indoor spaces.",

    gridImages: [
      "/colored-concrete/1.png",
      "/colored-concrete/2.png",
      "/colored-concrete/3.png",
      "/colored-concrete/4.png",
      "/colored-concrete/5.png",
      "/colored-concrete/6.png",
      "/colored-concrete/7.png",
      "/colored-concrete/8.png",
      "/colored-concrete/9.png"
    ],

    featuresTitle: "Features of Colored Concrete:",
    features: [
      {
        title: "Beauty and Diversity",
        description:
          "Colored concrete is characterized by providing a wide range of colors and patterns, allowing for customization of the final appearance of outdoor and indoor spaces according to the client's needs and the decor of the place. Colored concrete can mimic natural stone, wood, or tiles, making it an ideal choice for various designs.",
      },
      {
        title: "High Resistance to Wear and Environmental Factors",
        description:
          "Colored concrete retains high resistance to harsh weather conditions such as rain, extreme heat, and cold, without its color or quality being affected. It is also resistant to stains and oils, making it an ideal choice for walkways, sidewalks, and patios.",
      },
      {
        title: "Low Maintenance",
        description:
          "Colored concrete does not require continuous maintenance, thanks to its durable composition that makes it resistant to scratches and stains. It can be easily cleaned using simple tools and cleaning materials, making it economical and efficient in the long run.",
      },
      {
        title: "Cost-Effective",
        description:
          "Despite its high quality and distinctive aesthetic appearance, colored concrete offers excellent value for money, making it an economical choice compared to other materials such as tiles or natural stone.",
      },
    ],

    whyChooseTitle: "Why Choose Riyadh Floors to Implement Colored Concrete?",
    whyChoosePoints: [
      {
        title: "Extensive Experience and Successful Track Record",
        description:
          "At Riyadh Floors, we offer specialized solutions for implementing colored concrete with high levels of quality, thanks to our long experience and track record of successful projects.",
      },
      {
        title: "Fast and Efficient Execution",
        description:
          "We guarantee the implementation of colored concrete projects with speed and accuracy while maintaining the highest quality standards, thanks to our specialized team and the latest tools.",
      },
      {
        title: "Customized Designs to Suit Your Needs",
        description:
          "We offer a wide range of colors and patterns that can be customized to suit your needs and the decor of your space, ensuring you get results that exceed expectations.",
      },
      {
        title: "Competitive Prices",
        description:
          "We provide the best prices in the market while guaranteeing the quality of execution, making us the ideal choice for implementing colored concrete in your projects.",
      },
    ],

    whereUsedTitle: "Where to Use for Colored Concrete?",
    advantages: [
      "Reinforced concrete poured under water",
      "Fire-resistant reinforced concrete",
      "Reinforced concrete resistant to atomic radiation",
      "Reinforced concrete for dams",
      "Bomb-resistant reinforced concrete",
      "Earthquake-resistant reinforced concrete",
      "Colored reinforced concrete",
    ],
    usageDescription:
      "Walkways and Sidewalks, Patios and Balconies, Entrances and Parking Lots, Gardens and Outdoor Spaces - providing durability and aesthetic appeal in all applications.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    featuredImageTitle: "COLOURED CONCRETE",

    finalUsageTitle: "Benefits of Using Colored Concrete",
    finalUsageDescription:
      "Wide range of applications including walkways and sidewalks for high durability, patios and balconies for aesthetic appeal, entrances and parking lots for stain resistance, and gardens and outdoor spaces for weather resistance.",

    closingText:
      "If you are looking for colored concrete to add an artistic and modern touch to your project, contact us at Riyadh Floors Company. We offer you the best prices and the highest levels of quality.",
  },
  {
    id: "landscaping-service",
    title: "LANDSCAPING SERVICE",
    mainHeading: "What is a landscaping service?",
    description:
      "Landscaping is the process of enhancing and beautifying outdoor spaces, whether they are villa gardens or small home gardens, by adding, modifying, or arranging natural or artificial elements such as plants, trees, artificial grass, flowers, rocks, waterfalls, and lighting. With Riyadh Floors Company, your garden will become a source of pleasure and comfort for you and your family, and a distinctive facade for your commercial project.",

    gridImages: [
      "/landscape/1.webp",
      "/landscape/2.webp",
      "/landscape/3.webp",
      "/landscape/4.webp",
      "/landscape/5.png",
      "/landscape/6.webp",
      "/landscape/7.png",
      "/landscape/8.png",
      "/landscape/9.png"
    ],

    featuresTitle: "What secrets will your garden bring you?",
    features: [
      {
        title: "Increased property value",
        description:
          "A professionally designed garden increases the attractiveness of a home or project and creates a positive impression on visitors or clients.",
      },
      {
        title: "Comfort and well-being",
        description:
          "A garden creates a comfortable space for relaxation, recreation, and enjoying nature, which contributes to reducing stress and pressure.",
      },
      {
        title: "Multiple activities",
        description:
          "Gardens provide an ideal space for various activities such as playing, skating, meditation, or even landscaping rest areas and home gardens with pictures.",
      },
      {
        title: "Environmental conservation",
        description:
          "Contributes to landscaping home gardens by saving water and energy and reducing pollution and emissions.",
      },
    ],

    whyChooseTitle: "Why choose Riyadh Floors Company for landscaping services?",
    whyChoosePoints: [
      {
        title: "Leaders in Landscaping in the Kingdom",
        description:
          "Riyadh Floors Company is one of the leading landscaping companies that offer integrated services for the creation, design, implementation, and maintenance of small home gardens and villa gardens with the highest level of quality and beauty.",
      },
      {
        title: "Attention to Detail",
        description:
          "We pay attention to the smallest details, from choosing the types of plants, flowers, and artificial grass that suit small gardens to providing you with accessories and decorations for home garden landscaping.",
      },
      {
        title: "Expert Team",
        description:
          "We have a team of trained and qualified engineers and technicians to implement the best solutions for garden design, including the installation of artificial grass and the design of artificial grass gardens.",
      },
      {
        title: "Extensive Experience and Strong Portfolio",
        description:
          "We are proud to have more than 20 years of experience in landscaping home gardens and small villa gardens, with a long list of successful projects throughout the Kingdom.",
      },
      {
        title: "Innovation and Creativity in Design",
        description:
          "We are keen on designing innovative and attractive gardens that reflect your taste and personality. We offer landscaping and garden design with designs that are consistent with the surrounding environment and decor.",
      },
      {
        title: "Comprehensive Vision before Implementation",
        description:
          "We listen to your wishes and provide 3D plans to help you visualize the final look of your garden before starting work.",
      },
      {
        title: "Quality and Warranty",
        description:
          "We adhere to the highest quality standards and provide a warranty of up to 5 years on all our services, including landscaping rest areas and villa gardens.",
      },
      {
        title: "Budget-Friendly",
        description:
          "We are keen on providing services at competitive prices suitable for everyone while maintaining the highest quality standards.",
      },
    ],

    whereUsedTitle: "What are the landscaping services we offer?",
    advantages: [
      "Designing small home gardens: We design a modern and attractive garden for you that suits small spaces",
      "Installing artificial grass: We install high-quality artificial grass for you that maintains its greenery throughout the year",
      "Installing pergolas and gazebos: We provide you with innovative solutions to add an atmosphere of elegance and privacy",
      "Installing pools and waterfalls: Adding pools and waterfalls adds an artistic touch and calms the atmosphere",
      "Installing outdoor lighting: To add an aesthetic touch in the evening and night",
      "Planting trees and plants: Choosing plants that suit the climate and soil of the site",
    ],
    usageDescription:
      "Villa gardens, small home gardens, commercial projects, rooftop gardens, under-stair gardens, rest areas, and pergola installations - providing comprehensive landscaping solutions for all outdoor spaces.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    featuredImageTitle: "landscaping",

    finalUsageTitle: "Comprehensive Landscaping Solutions",
    finalUsageDescription:
      "From designing small home gardens to installing artificial grass, pergolas, pools, waterfalls, outdoor lighting, and planting trees - we provide complete landscaping services for villa gardens, commercial projects, and residential spaces.",

    closingText: "",
  },

  {
    id: "rubber-floor-service",
    title: "RUBBER FLOOR SERVICE",
    mainHeading: "Rubber floors service",
    description:
      "Looking for rubber flooring that combines safety, durability, and aesthetics all in one? Whether you aim to enhance playground surfaces or provide a safe environment for children in parks or schools, rubber flooring is the ideal choice. It offers high protection, excellent shock resistance, and flexibility in use.",

    gridImages: [
      "/rubber-flooring/1.jpeg",
      "/rubber-flooring/2.jpeg",
      "/rubber-flooring/3.jpeg",
      "/rubber-flooring/4.jpg",
      "/rubber-flooring/5.webp",
      "/rubber-flooring/6.jpg",
      "/rubber-flooring/7.jpg",
      "/rubber-flooring/8.jpg",
      "/rubber-flooring/9.png"
    ],

    featuresTitle: "Why Choose Rubber Floors?",
    features: [
      {
        title: "Unmatched Safety",
        description:
          "Rubber flooring is known for its shock-absorbing properties, making it the best choice for children's areas like public parks and playgrounds. It helps reduce the risk of injuries caused by falls.",
      },
      {
        title: "Resilience to Outdoor Conditions",
        description:
          "Outdoor rubber flooring offers exceptional resistance to weather conditions such as rain and high temperatures, making it perfect for patios, pathways, and sports courts.",
      },
      {
        title: "Aesthetic Appeal and Comfort",
        description:
          "Choose from a wide range of colors and designs to match your style and needs, whether you're looking to install foam floors for children or gym flooring.",
      },
    ],

    whyChooseTitle: "Why Choose SaRiyadhudi Floors?",
    whyChoosePoints: [
      {
        title: "Competitive Prices",
        description: "We ensure high-quality rubber flooring at an affordable price.",
      },
      {
        title: "Professional and Quick Installation",
        description:
          "Our specialized team offers fast and efficient installation services, guaranteeing long-lasting quality.",
      },
      {
        title: "Exceptional Customer Service",
        description: "We take care of every detail, from design to installation, ensuring your complete satisfaction.",
      },
    ],

    whereUsedTitle: "Advantages of Rubber Flooring from Riyadh Floors",
    advantages: [
      "Long-lasting Durability: Made from high-quality materials, ensuring resistance to wear and tear",
      "Anti-slip and Wear-resistant: Provides extra protection against accidents and slips",
      "Eco-friendly and Easy to Maintain: Easy to clean and requires minimal maintenance",
      "Shock-absorbing properties for children's safety",
      "Weather resistant for outdoor applications",
      "Wide range of colors and designs available",
    ],
    usageDescription:
      "Rubber Flooring for Playgrounds, Outdoor Rubber Flooring for public areas, Children's Rubber Flooring for schools and gardens, Sports courts and gym flooring - ideal for high-traffic areas requiring safety and durability.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    featuredImageTitle: "Rubber Flooring",

    finalUsageTitle: "Applications of Rubber Floors",
    finalUsageDescription:
      "Perfect for playgrounds and sports courts ensuring high performance and player comfort, outdoor areas like patios and walkways that withstand harsh weather conditions, and children's areas in gardens and schools providing great protection and reducing fall risks.",

    closingText: "",
  },

  {
    id: "internal-external-finishes",
    title: "INTERNAL AND EXTERNAL FINISHES",
    mainHeading: "Interior and Exterior decorations.",
    description:
      "When ordinary spaces are transformed into exceptional works, captivating visitors from the first glance, and remaining etched in their minds, with their beauty lasting for the longest time, we are definitely talking about the interior and exterior decoration services from Riyadh Floors. At Riyadh Floors, we consider decoration an art that reflects the essence of the individual and the spirit of the place.",

    gridImages: [
      "/interior/1.png",
      "/interior/2.png",
      "/interior/3.png",
      "/interior/4.png",
      "/interior/5.png",
      "/interior/6.png",
      "/interior/7.png",
      "/interior/8.png",
      "/interior/9.png"
    ],

    featuresTitle: "Our Services Include:",
    features: [
      {
        title: "Interior and Exterior Finishes",
        description:
          "We use the best finishing materials, including bathroom finishes, kitchen finishes, and gypsum board finishes for ceilings and walls.",
      },
      {
        title: "Villa and Palace Finishing",
        description:
          "We turn your ideas into reality with modern villa finishes and interior villa finishes that reflect luxury and sophistication.",
      },
      {
        title: "House and Apartment Finishing",
        description: "We offer classic and modern apartment finishes to suit all tastes.",
      },
      {
        title: "Office and Institution Finishing",
        description:
          "If you are looking for office finishing that reflects your company's identity and increases employee productivity, we offer the ideal solutions.",
      },
      {
        title: "Paints and Finishes",
        description:
          "We use the latest types of paints and finishes for apartments, whether you prefer traditional or modern colors.",
      },
      {
        title: "Flooring and Lighting",
        description:
          "We offer a wide range of flooring options and carefully designed lighting systems that enhance interior decorations.",
      },
    ],

    whyChooseTitle: "Why Choose Riyadh Floors?",
    whyChoosePoints: [
      {
        title: "Quality and Excellence",
        description:
          "We offer the highest quality standards using premium finishing materials in every step. We guarantee you impressive results that last for a long time in all apartment and villa finishes.",
      },
      {
        title: "Extensive Experience",
        description:
          "With long experience in apartment and villa decoration finishes, we guarantee you an execution that meets your expectations.",
      },
      {
        title: "Creativity and Innovation",
        description:
          "At Riyadh Floors, we are keen on keeping up with the latest trends in modern finishes and exterior villa finishes, with creative touches that exceed your expectations.",
      },
      {
        title: "Integration and Diversity",
        description:
          "Our services include everything you need, from bedroom finishes to reception finishes and cafe finishes, to ensure providing integrated and comprehensive solutions.",
      },
    ],

    whereUsedTitle: "Latest Designs and Services:",
    advantages: [
      "Gypsum Board Finishes: Latest gypsum board ceiling finishes suitable for all villas and apartments",
      "Bedroom Finishes: Modern or classic bedroom finishes that align with your taste",
      "Exterior Finishes for Villas: Latest modern and classic styles for villa exteriors",
      "Building Entrance Finishes: Unique designs that make entrances a symbol of luxury",
      "Bathroom and Kitchen Finishes: Professional finishes with premium materials",
      "Office Finishes: Designs that reflect company identity and increase productivity",
    ],
    usageDescription:
      "Apartments, Villas, Palaces, Offices, Institutions, Cafes, Reception areas, Bedrooms, Bathrooms, Kitchens - providing comprehensive interior and exterior finishing solutions for all types of spaces.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    featuredImageTitle: "Internal & External Finishes",

    finalUsageTitle: "How We Work:",
    finalUsageDescription:
      "We visit the site to assess it and develop a customized plan, provide detailed consultations on apartment and villa finishes to suit your needs, and use the latest tools and finishing materials to execute our work with high quality.",

    closingText: "",
  },

  {
    id: "artificial-grass",
    title: "ARTIFICIAL GRASS",
    mainHeading: "Do you want to get a distinguished field with high quality?",
    description:
      "Riyadh Floors Company offers you the best solutions for installing artificial turf fields in the Kingdom, using the latest technologies and materials that comply with international and local standards. You will enjoy playing football on a soft and flexible surface without worrying about water, weeds, or insects, as the artificial turf is produced in a way that mimics natural grass to provide softness, flexibility, and comfort.",

    gridImages: [
      "/artificial-grass/1.png",
      "/artificial-grass/2.png",
      "/artificial-grass/3.webp",
      "/artificial-grass/4.png",
      "/artificial-grass/5.webp",
      "/artificial-grass/6.webp",
      "/artificial-grass/7.jpg",
      "/artificial-grass/8.png",
      "/artificial-grass/9.webp"
    ],

    featuresTitle: "Features of Artificial Turf Fields from Riyadh Floors Company:",
    features: [
      {
        title: "Superior quality",
        description:
          "At Riyadh Flooring Company, we use the best types of artificial grass in accordance with international standards to ensure long-term durability and quality.",
      },
      {
        title: "Extensive experience",
        description:
          "Our team of highly experienced engineers and technicians ensures that you design and implement artificial turf fields with high efficiency and accuracy.",
      },
      {
        title: "The right price",
        description:
          "We offer competitive prices that include supply, installation, warranty and maintenance, in addition to special offers and exclusive discounts.",
      },
      {
        title: "Warranty and Maintenance",
        description:
          "In addition to supply and installation, we provide regular maintenance services for artificial turf pitches to ensure long-term performance and quality.",
      },
    ],

    whyChooseTitle: "What are the advantages of artificial grass?",
    whyChoosePoints: [
      {
        title: "Protection",
        description:
          "Artificial turf courts provide additional protection for players, as drainage holes contribute to preventing water accumulation and avoiding slippage, and also prevent the formation of bacteria and fungi.",
      },
      {
        title: "Savings",
        description:
          "Artificial turf fields do not require irrigation, fertilization, plowing or mowing, which saves a lot of costs and time.",
      },
      {
        title: "Durability",
        description:
          "Artificial turf fields withstand extensive use without affecting the quality of the surface or changing its color or shape.",
      },
      {
        title: "Quality",
        description:
          "Artificial turf maintains its excellent performance in all weather conditions, whether hot, cold, wet or dry.",
      },
      {
        title: "Aesthetic",
        description:
          "Artificial turf courts add an attractive and consistent appearance to sports spaces, and are available in a variety of colors and sizes.",
      },
    ],

    whereUsedTitle: "Where Can Artificial Turf Be Used?",
    advantages: [
      "Football Fields: Designed to withstand intensive use and ensure player comfort and protection",
      "Multi-Use Fields: Suitable for basketball, tennis, and other multi-sport courts",
      "Public and Private Gardens: Provides aesthetic view and reduces maintenance needs",
      "Homes: Popular choice for decorating roofs and fences",
      "Sports Artificial Turf: High durability for matches and training",
      "Wall Artificial Turf: Decorative element for walls and fences",
    ],
    usageDescription:
      "Football Fields, Multi-Use Fields, Public and Private Gardens, Homes, Sports facilities - artificial turf provides a safe, comfortable, and suitable surface for all seasons and weather conditions.",
    featuredImage: "/placeholder.svg?height=400&width=600",
    featuredImageTitle: "Artificial grass",

    finalUsageTitle: "Types of Football Field Turf:",
    finalUsageDescription:
      "Sports Artificial Turf designed specifically for football fields with high durability and shock absorption, Multi-use artificial turf for basketball and tennis courts, Wall Artificial Turf for decorative purposes, and various types suitable for different sports activities and locations.",

    closingText: "",
  },
]
