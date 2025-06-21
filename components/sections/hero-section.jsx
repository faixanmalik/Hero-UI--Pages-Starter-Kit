import { Button } from 'components/ui/button'
import React from 'react'

const HeroSection = () => {
  return (
    <section class="bg-white text-black">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Payments tool for software companies</h1>
                <p class="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                
                <Button>Button</Button>
                
            </div>             
        </div>
    </section>
  )
}

export default HeroSection