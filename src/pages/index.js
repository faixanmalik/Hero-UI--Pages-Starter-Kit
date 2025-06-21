import Head from "next/head";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";
import { Button } from "@heroui/react";

export default function Home() {


  return (
    <>
      <div className='bg-[#fafafa] text-[#3b3a39] w-screen min-h-screen overflow-x-hidden'>
        Home Page

        <Button color="primary">Button</Button>
      </div>
    </>
  )
}
