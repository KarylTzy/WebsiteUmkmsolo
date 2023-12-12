import { Text, SimpleGrid, Container, rem } from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';
import classes from '../../styles/Features.module.css';;



function Feature({ icon: Icon, title, description, className, ...others }) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon style={{ width: rem(38), height: rem(38) }} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconTruck,
    title: 'Inovasi Dan Kreativitas',
    description:
      'Meskipun sangat menghargai tradisi, UMKM di Solo juga menunjukkan kemampuan untuk berinovasi. Mereka menggabungkan unsur-unsur tradisional dengan desain modern, menciptakan produk yang tetap relevan di tengah-tengah perkembangan zaman. Kreativitas ini terlihat dalam setiap aspek, mulai dari desain fashion hingga konsep kuliner yang unik.',
  },
  {
    icon: IconCertificate,
    title: 'Kualitas Terjamin',
    description:
      'UMKM di Solo sering kali dikelola oleh para pengrajin dan pelaku usaha yang memiliki keterampilan dan keahlian tinggi dalam bidangnya masing-masing. Baik itu dalam pembuatan batik, kerajinan tangan, kuliner, atau sektor lainnya, kualitas produk dan layanan sering kali mencerminkan keahlian tinggi para pelaku usaha.',
  },
  {
    icon: IconCoin,
    title: 'Harga Yang Terjangkau',
    description:
      'Harga yang terjangkau menjadi salah satu ciri khas yang menonjol dari Usaha Mikro, Kecil, dan Menengah (UMKM) di Solo. Para pelaku usaha di kota ini memiliki kesadaran yang tinggi akan kebutuhan masyarakat lokal dan wisatawan untuk mendapatkan produk dan layanan dengan nilai yang baik untuk uang mereka.',
  },
];

export default function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50} style={{marginTop: '10%'}}>
        {items}
      </SimpleGrid>
    </Container>
  );
}