import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    keywords?: string[];
    author?: string;
}

export const generateMetadata = ({
    title = `Riyadh Floors | Premium Flooring Solutions & Installation Services`,
    description = `Riyadh Floors delivers premium flooring solutions including stamped concrete, resin bound surfacing, terrazzo, polished concrete, and artificial grass installation across Saudi Arabia. Our expert team specializes in durable flooring systems, landscaping services, rubber flooring, and comprehensive interior/exterior finishes. With over 12 years of experience and 400+ successful projects, Riyadh Floors combines technical excellence with aesthetic design to create beautiful, long-lasting floors for residential, commercial, and industrial applications. From decorative concrete to sports field installations, we provide end-to-end flooring services tailored to your unique requirements. Partner with Riyadh Floors for innovative, high-quality flooring solutions that enhance property value and deliver exceptional durability across all environments.`,
    keywords = [
        // Company specific
        "Riyadh Floors",
        "Riyadh Floors Saudi Arabia",
        "Riyadh flooring company",
        "Riyadh flooring services",

        // Core flooring services
        "stamped concrete",
        "stamped concrete flooring",
        "decorative concrete",
        "colored concrete",
        "concrete flooring Saudi Arabia",

        // Specialized flooring
        "resin bound surfacing",
        "resin bound flooring",
        "terrazzo flooring",
        "terrazzo tiles",
        "exposed aggregate concrete",
        "polished concrete floors",

        // Modern flooring solutions
        "epoxy flooring",
        "artificial epoxy surfacing",
        "brushed concrete",
        "microcement flooring",
        "topcrete flooring",

        // Outdoor solutions
        "artificial grass installation",
        "artificial turf fields",
        "sports field installation",
        "football field artificial grass",
        "landscaping services",

        // Safety flooring
        "rubber flooring",
        "playground rubber flooring",
        "gym rubber flooring",
        "anti-slip flooring",
        "safety flooring solutions",

        // Finishing services
        "interior finishes",
        "exterior finishes",
        "villa finishing",
        "apartment finishing",
        "gypsum board finishes",

        // Applications
        "residential flooring",
        "commercial flooring",
        "industrial flooring",
        "villa flooring",
        "office flooring",
        "warehouse flooring",

        // Locations
        "flooring Riyadh",
        "flooring Saudi Arabia",
        "concrete flooring Riyadh",
        "flooring contractor Saudi Arabia",

        // Features
        "durable flooring",
        "weather resistant flooring",
        "slip resistant flooring",
        "low maintenance flooring",
        "decorative flooring",

        // Business outcomes
        "professional flooring installation",
        "flooring maintenance services",
        "custom flooring design",
        "high-quality flooring materials",
        "flooring warranty services",
        "competitive flooring prices"
    ],
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://riyadhfloors.com/");

    return {
        metadataBase,
        title: {
            template: `%s | Riyadh Floors`,
            default: title
        },
        description,
        openGraph: {
            title: 'Riyadh Floors | Premium Flooring Solutions & Installation Services',
            description:
                "Riyadh Floors delivers premium flooring solutions including stamped concrete, resin bound surfacing, terrazzo, polished concrete, and artificial grass installation across Saudi Arabia. Our expert team specializes in durable flooring systems, landscaping services, rubber flooring, and comprehensive interior/exterior finishes. With over 12 years of experience and 400+ successful projects, we provide end-to-end flooring services tailored to your unique requirements.",
            url: 'https://riyadhfloors.com/',
            siteName: 'Riyadh Floors',
            locale: 'en_US',
            type: 'website'
        },
        keywords,
        authors: [{ name: 'Riyadh Floors' }],
        creator: 'Hmad Afzal',
        publisher: 'Riyadh Floors',
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1
            }
        },
    };
};