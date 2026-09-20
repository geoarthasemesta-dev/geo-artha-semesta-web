/**
 * Hero Slideshow Data Configuration
 * -----------------------------------
 * Untuk menambah, menghapus, atau mengubah urutan slide,
 * cukup edit array HERO_SLIDES di bawah ini.
 *
 * Setiap slide memiliki:
 * - id          : identifier unik
 * - image       : path gambar (relative terhadap folder public/)
 * - titleKey    : key i18n untuk judul slide
 * - descKey     : key i18n untuk deskripsi slide
 *
 * Pastikan key i18n yang digunakan sudah ditambahkan
 * di file locales/en/common.json dan locales/id/common.json
 */

export interface HeroSlide {
  id: string;
  image: string;
  titleKey: string;
  descKey: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    image: "/bg-cover-section-hero.jpg",
    titleKey: "heroSection.slides.0.title",
    descKey: "heroSection.slides.0.description",
  },
  {
    id: "slide-2",
    image: "/WhatsApp Image 2026-09-15 at 11.22.03.jpeg",
    titleKey: "heroSection.slides.1.title",
    descKey: "heroSection.slides.1.description",
  },
  {
    id: "slide-3",
    image: "/WhatsApp Image 2026-09-15 at 11.22.03 (1).jpeg",
    titleKey: "heroSection.slides.2.title",
    descKey: "heroSection.slides.2.description",
  },
  {
    id: "slide-4",
    image: "/survey_2025_1.jpg",
    titleKey: "heroSection.slides.3.title",
    descKey: "heroSection.slides.3.description",
  },
];

/** Durasi tiap slide dalam milidetik */
export const SLIDE_INTERVAL_MS = 6000;

/** Durasi transisi crossfade dalam detik */
export const SLIDE_TRANSITION_DURATION = 1.2;
