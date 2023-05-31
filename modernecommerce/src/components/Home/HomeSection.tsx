import AsgaardSofa from "./AsgaardSofa";
import OurBlogs from "./OurBlogs";
import { OurInstagram } from "./OurInstagram";
import TopPicks from "./TopPicks";
import RocketSingleSeater from "./rocketSingleSeater";
import Table from "./table";


export function HomeSection() {
  return (
    <section>
        <RocketSingleSeater />
        <Table />
        <TopPicks />
        <AsgaardSofa />
        <OurBlogs />
        <OurInstagram />
    </section>
  )
}
