import PhoGardenExperience from '@/components/PhoGardenExperience';
import { restaurantJsonLd } from '@/data/content';

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }} />
      <PhoGardenExperience />
    </>
  );
}
