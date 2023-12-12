import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from '../../styles/hero.module.css';

export default function hero() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Selamat Datang di {' '}
          <Text component="span" inherit className={classes.highlight}>
            UMKM Solo
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          Solo, atau Surakarta, bukan hanya sebuah kota dengan sejarah panjang dan kekayaan budaya, tetapi juga tempat di mana Usaha Mikro, Kecil, dan Menengah (UMKM) berkembang pesat, 
          menciptakan ekosistem bisnis yang beragam dan menghidupkan kota dengan kekhasan lokalnya.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} variant="white" size="lg">
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}