import { motion } from 'framer-motion'
import Head from 'next/head'

import { AboutButton } from '../components/button/about'
import { BlogButton } from '../components/button/blog'
import { GithubButton } from '../components/button/github'
import { TopLogo } from '../components/logo/topLogo'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>ryone9re</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'backOut', duration: 0.3 }}
      >
        <div className='w-full h-screen flex flex-col items-center justify-center bg-yellow-250'>
          <TopLogo />
          <div className='flex flex-wrap justify-center gap-2'>
            <AboutButton />
            <BlogButton />
            <GithubButton />
          </div>
        </div>
      </motion.div>
    </>
  )
}
