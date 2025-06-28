# Fundación Mundo de Niños Felices - Aplicación React

## Descripción
Aplicación React moderna con Vite para fundacionmundodeninosfelices.org

## 🚀 Tecnologías
- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **JavaScript (ES6+)** - Lenguaje de programación
- **CSS3** - Estilos con animaciones
- **Font Awesome** - Iconos
- **Google Fonts** - Tipografías

## 📁 Estructura del proyecto

```
fundacionmundodeninosfelices/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/        # Componentes React
│   │   ├── Header.jsx
│   │   ├── ConstructionContent.jsx
│   │   ├── AnimationContainer.jsx
│   │   ├── FeatureSection.jsx
│   │   ├── ComingSoonSection.jsx
│   │   └── Footer.jsx
│   ├── hooks/            # Hooks personalizados
│   │   └── useAnimations.js
│   ├── styles/           # Estilos globales
│   │   └── index.css
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Punto de entrada
├── index.html            # HTML base
├── vite.config.js        # Configuración de Vite
├── package.json          # Dependencias
└── README.md
```

## 🛠️ Comandos disponibles

### Desarrollo local
```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (puerto 3000)
npm run dev

# Servidor de desarrollo con red local
npm run dev -- --host
```

### Construcción y despliegue
```bash
# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 🌐 Desarrollo local

### Método 1: NPM (Recomendado)
```bash
cd /Users/fernandomontero/desa/fundacionmundodeninosfelices

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre: `http://localhost:3000`

### Método 2: Con red local (para móviles)
```bash
npm run dev -- --host
```

Luego usa tu IP local desde cualquier dispositivo en la misma red.

## ☁️ Despliegue en Azure Static Web Apps

### Configuración para Azure

El proyecto incluye:
- **`staticwebapp.config.json`** - Configuración de Azure
- **`package.json`** - Scripts de build
- **`vite.config.js`** - Optimizaciones de build

### Steps para Azure:

1. **Build settings en Azure**:
   - **App location**: `/`
   - **Api location**: `` (vacío)
   - **Output location**: `dist`
   - **Build command**: `npm run build`

2. **GitHub Actions automático**:
   ```yaml
   # Azure creará automáticamente un workflow similar a:
   name: Azure Static Web Apps CI/CD
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build_and_deploy_job:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Build And Deploy
           uses: Azure/static-web-apps-deploy@v1
           with:
             app_location: "/"
             output_location: "dist"
             app_build_command: "npm run build"
   ```

## 🎨 Características de la aplicación

### Componentes principales
- **Header** - Logo y título animado
- **ConstructionContent** - Contenido principal
- **AnimationContainer** - Animaciones flotantes
- **FeatureSection** - Características con hover
- **ComingSoonSection** - Lista de próximas funciones
- **Footer** - Enlaces sociales y copyright

### Hooks personalizados
- **useFloatingParticles** - Partículas animadas
- **useProgressAnimation** - Barra de progreso
- **useWelcomeMessage** - Mensajes temporales

### Animaciones CSS
- Entrada suave de elementos
- Efectos hover interactivos
- Partículas flotantes
- Gradientes animados
- Efectos de ripple en clicks

## 📱 Responsive Design
- **Desktop**: Grid de 3 columnas
- **Tablet**: Grid de 2 columnas  
- **Móvil**: Columna única
- **Breakpoints**: 768px y 480px

## ⚡ Optimizaciones

### Vite optimizations
- **Hot Module Replacement** (HMR)
- **Tree shaking** automático
- **Code splitting** por chunks
- **Asset optimization**
- **Build minificado**

### Performance
- Lazy loading de componentes
- Componentes memoizados donde necesario
- CSS optimizado por Vite
- Imágenes y assets optimizados

## 🔧 Configuración de desarrollo

### VS Code recomendado
Extensiones:
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Bracket Pair Colorizer

### Scripts útiles
```bash
# Análisis del bundle
npm run build && npx vite-bundle-analyzer dist

# Servidor con HTTPS local
npm run dev -- --https

# Build con análisis
npm run build -- --mode development
```

## 🚦 Estados de la aplicación

### Desarrollo
- Hot reload activado
- Source maps completos
- Mensajes de error detallados

### Producción
- Bundle minificado
- Assets optimizados
- Source maps deshabilitados
- Cache headers optimizados

## 📊 Métricas y monitoreo

### Build size
- **Vendors chunk**: ~150KB (React + dependencies)
- **Main chunk**: ~50KB (componentes de la app)
- **CSS**: ~15KB (estilos compilados)

### Performance targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3s

## 🆘 Troubleshooting

### Error: dependencias no encontradas
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: puerto ocupado
```bash
npm run dev -- --port 3001
```

### Error: hot reload no funciona
```bash
# Verificar que estés en la carpeta correcta
pwd
# Debería mostrar: /Users/fernandomontero/desa/fundacionmundodeninosfelices
```

## 🔄 Flujo de trabajo

1. **Desarrollo local**: `npm run dev`
2. **Commit changes**: `git add . && git commit -m "mensaje"`
3. **Push a GitHub**: `git push origin main`
4. **Azure build automático**: ~2-3 minutos
5. **Sitio actualizado**: URL de Azure actualizada

---

**¡Tu aplicación React está lista para desarrollo y despliegue!** 🎉