import Hero1 from "./components/hero1"
import Companies from "./components/company"
import Features from "./components/feature"
import Categories from "./components/categories"
import Explore from "./components/explore"
import Products from "./components/product"
export default function Home(){
  return(
    <div className="px-[2vw]">
 <Hero1/>
 <br />
 <Companies/>
 <br />
 <Features/>
 <br />
 <Categories/>
 <br />
 <Explore/>
 <br />
 <Products/>
 <br />
 <br />
    </div>
  )
}


