# WasteCut Platform

Platform komunitas untuk edukasi dan aksi nyata pengurangan sampah di Indonesia.

## Deskripsi

WasteCut adalah platform web yang menghubungkan pegiat lingkungan di seluruh Indonesia untuk bersama-sama mengurangi sampah dan menciptakan masa depan yang lebih hijau. Platform ini menyediakan fitur komunitas, blog edukatif, dan informasi kontak untuk memfasilitasi gerakan zero waste di Indonesia.

## Fitur

- **Beranda**: Landing page dengan informasi dampak, fitur, dan panduan
- **Tentang Kami**: Visi, misi, dan cerita WasteCut
- **Komunitas**: Daftar 9 komunitas peduli lingkungan di berbagai kota
- **Blog**: Artikel edukatif tentang pengurangan sampah dan zero waste
- **Kontak**: Form kontak dan informasi hubungi kami
- **Dark Mode**: Toggle antara light dan dark theme
- **Responsive Design**: Mobile-friendly di semua perangkat

## Teknologi

- **React 19.2.4**: Library JavaScript untuk UI
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **Webpack 5**: Module bundler
- **Babel**: JavaScript compiler
- **Local Storage**: Untuk menyimpan preferensi dark mode

## Struktur Proyek

```
wastecut-platform/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── cards/
│   │   │   ├── BlogCard.jsx
│   │   │   └── CommunityCard.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Loading.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SkeletonCard.jsx
│   │   └── Toast.jsx
│   ├── context/
│   │   └── DarkModeContext.jsx
│   ├── data/
│   │   └── dummy.json
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogDetail.jsx
│   │   ├── Community.jsx
│   │   ├── Contact.jsx
│   │   └── Home.jsx
│   ├── styles/
│   │   └── index.css
│   ├── constants/
│   │   └── index.js
│   ├── App.jsx
│   └── index.js
├── .babelrc
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── webpack.config.js
```

## Cara Menjalankan

### Prerequisites

- Node.js (v14 atau lebih baru)
- npm atau yarn

### Instalasi

1. Clone repository
```bash
git clone <repository-url>
cd wastecut-platform
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm start
```

4. Buka browser dan akses `http://localhost:3000`

### Build untuk Production

```bash
npm run build
```

File production akan tersedia di folder `dist/`.

## Prinsip Design

### Semantic HTML
- Menggunakan HTML5 semantic elements (`header`, `main`, `footer`, `section`, `article`, `nav`)
- Proper heading hierarchy (h1, h2, h3)
- ARIA labels untuk accessibility

### Clean Code
- Component-based architecture
- Reusable components
- Constants untuk nilai yang sering digunakan
- useCallback untuk optimasi performance
- Proper naming conventions
- Separation of concerns

### Accessibility
- Keyboard navigation support
- ARIA labels dan roles
- Focus states yang jelas
- Alt text untuk images
- Semantic structure

### Performance
- Code splitting
- Lazy loading untuk images
- Optimized animations
- Minimal re-renders dengan useCallback

## Best Practices yang Diterapkan

1. **DRY (Don't Repeat Yourself)**
   - Reusable components
   - Constants file untuk data yang digunakan berulang
   - Utility functions

2. **Single Responsibility Principle**
   - Setiap component memiliki satu tanggung jawab
   - Separation of concerns

3. **Semantic HTML**
   - Proper use of HTML5 elements
   - Meaningful class names
   - ARIA attributes

4. **Responsive Design**
   - Mobile-first approach
   - Breakpoints yang konsisten
   - Flexible layouts

5. **Performance Optimization**
   - useCallback untuk prevent re-renders
   - Efficient state management
   - Optimized animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Kontribusi

Untuk berkontribusi pada project ini:
1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## License

Distributed under the MIT License.

## Tim

Dikembangkan oleh tim WasteCut Indonesia.

## Kontak

- Email: worklifeariqfadhil@gmail.com
- Instagram: [@ariqqfadhil](https://instagram.com/ariqqfadhil)
- Phone: +62 895-3840-98583

---

**WasteCut** - Bersama Kurangi Sampah, Selamatkan Bumi