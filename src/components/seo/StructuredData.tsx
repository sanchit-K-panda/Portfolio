export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sanchit',
    jobTitle: 'Blockchain Developer & Web3 Engineer',
    description: 'Professional blockchain developer specializing in smart contracts, DeFi protocols, NFT marketplaces, and decentralized applications.',
    url: 'https://sanchit-portfolio.vercel.app',
    image: 'https://sanchit-portfolio.vercel.app/og-image.jpg',
    sameAs: [
      'https://github.com/sanchit',
      'https://linkedin.com/in/sanchit',
      'https://twitter.com/sanchit',
    ],
    knowsAbout: [
      'Blockchain Development',
      'Smart Contracts',
      'Solidity',
      'Ethereum',
      'Web3.js',
      'DeFi',
      'NFT',
      'DAO',
      'IPFS',
      'React',
      'TypeScript',
      'Next.js',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Your University',
    },
    workExample: [
      {
        '@type': 'CreativeWork',
        name: 'DeFi Lending Protocol',
        description: 'Decentralized lending platform with automated liquidation and variable interest rates',
        url: 'https://sanchit-portfolio.vercel.app/#projects',
      },
      {
        '@type': 'CreativeWork',
        name: 'NFT Marketplace',
        description: 'Full-featured NFT marketplace with lazy minting and royalty distribution',
        url: 'https://sanchit-portfolio.vercel.app/#projects',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
