import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock, IconHanger2, IconBrandCraft  } from '@tabler/icons-react';
import classes from '../../styles/Fitur.module.css';

export const MOCKDATA = [
  {
    icon: IconCookie,
    title: 'Kuliner',
    description:
      'Usaha Mikro, Kecil, dan Menengah (UMKM) di bidang kuliner di Solo, atau Surakarta, memiliki kekhasan dan keunikan tersendiri. Solo dikenal sebagai kota budaya di Jawa Tengah, dan warisan budayanya tercermin dalam beragam kuliner yang ditawarkan oleh UMKM di kota ini.',
  },
  {
    icon: IconHanger2,
    title: 'Fashion',
    description:
      'Usaha Mikro, Kecil, dan Menengah (UMKM) di bidang fashion di Solo, atau Surakarta, memiliki ciri khas dan keunikan tersendiri. Sebagai kota yang kaya akan warisan budaya dan seni, UMKM fashion di Solo mencerminkan tradisi serta inovasi dalam desain pakaian dan aksesori.',
  },
  {
    icon: IconBrandCraft,
    title: 'Kerajinan',
    description:
      'UMKM kerajinan di Solo tidak hanya menghasilkan produk dengan keahlian tinggi, tetapi juga melestarikan warisan budaya dan menciptakan lapangan kerja lokal. Kreativitas dan dedikasi para pengrajin lokal membuat kerajinan tangan Solo menjadi nilai tambah bagi wisatawan dan penggemar kerajinan unik.',
  },
];



export function Feature({ icon: Icon, title, description }) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export default function Fitur() {
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Kategori UMKM Surakarta</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          UMKM di Surakarta memiliki beberapa Kategori diantaranya sebagai berikut :
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}