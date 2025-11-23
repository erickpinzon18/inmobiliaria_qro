# 🤖 Configuración del Chat con IA

El chat utiliza **GPT-4o Mini** de OpenAI para proporcionar asistencia en tiempo real a los usuarios.

## 📋 Configuración

### 1. Obtener API Key de OpenAI

1. Ve a [OpenAI Platform](https://platform.openai.com/api-keys)
2. Inicia sesión o crea una cuenta
3. Navega a "API Keys"
4. Crea una nueva API key
5. Copia la key (solo se muestra una vez)

### 2. Configurar Variable de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxx
```

**⚠️ IMPORTANTE:** Nunca subas tu archivo `.env.local` a Git. Este archivo ya está incluido en `.gitignore`.

### 3. Verificar Configuración

El archivo `.env.example` muestra las variables necesarias. Copia este archivo:

```bash
cp .env.example .env.local
```

Y luego reemplaza `tu-api-key-aqui` con tu API key real.

## 🎨 Características del Chat

### Interfaz
- **Posición:** Botón flotante en la esquina inferior derecha
- **Diseño:** Estilo moderno con gradientes amber/gold que coincide con el sitio
- **Responsivo:** Se adapta a dispositivos móviles
- **Animaciones:** Efectos de pulse y hover suaves

### Funcionalidades
- ✅ Conversación en tiempo real
- ✅ Historial de mensajes en la sesión
- ✅ Indicador de "escribiendo..."
- ✅ Timestamps en cada mensaje
- ✅ Scroll automático a nuevos mensajes
- ✅ Enter para enviar (Shift+Enter para nueva línea)
- ✅ Badge de notificación

### Contexto del Asistente

El chatbot tiene conocimiento sobre:
- 🏠 Propiedades disponibles (casas, departamentos, terrenos)
- 📍 Zonas de Querétaro (Juriquilla, El Refugio, Centro, etc.)
- 💰 Procesos de compra/renta y financiamiento
- 📋 Servicios de la inmobiliaria
- 📞 Información de contacto
- 📅 Agendamiento de citas

## 🔧 Personalización

### Modificar el Contexto

Edita el archivo `app/components/ChatWidget.tsx` y modifica la constante `SYSTEM_CONTEXT`:

```typescript
const SYSTEM_CONTEXT = `Tu contexto personalizado aquí...`;
```

### Cambiar el Modelo

En `app/api/chat/route.ts`, puedes cambiar el modelo de OpenAI:

```typescript
model: "gpt-4o-mini", // Opciones: gpt-4o-mini, gpt-4o, gpt-3.5-turbo
```

### Ajustar Parámetros

```typescript
temperature: 0.7,    // Creatividad (0-2)
max_tokens: 500,     // Longitud máxima de respuesta
```

## 💡 Mejores Prácticas

1. **Limitar Tokens:** Mantén `max_tokens` razonable para controlar costos
2. **Temperature:** 0.7 es ideal para respuestas naturales pero consistentes
3. **Contexto:** Mantén el `SYSTEM_CONTEXT` claro y conciso
4. **Manejo de Errores:** El chat incluye mensajes de error amigables

## 💰 Costos Estimados

**GPT-4o Mini** es muy económico:
- ~$0.15 por 1M tokens de entrada
- ~$0.60 por 1M tokens de salida

**Ejemplo:** 1000 conversaciones de ~10 mensajes cada una ≈ $5-10 USD

## 🚀 Despliegue

Cuando despliegues en producción (Vercel, Netlify, etc.):

1. Agrega la variable de entorno `OPENAI_API_KEY` en el panel de configuración
2. El chat funcionará automáticamente
3. Monitorea el uso en [OpenAI Usage](https://platform.openai.com/usage)

## 📱 Responsive

El chat está optimizado para:
- ✅ Desktop (ventana completa)
- ✅ Tablet (ventana ajustada)
- ✅ Mobile (pantalla completa)

## 🎯 Próximas Mejoras

- [ ] Integración con base de datos de propiedades reales
- [ ] Envío de información por email
- [ ] Historial persistente con localStorage
- [ ] Sugerencias rápidas (Quick replies)
- [ ] Envío de imágenes de propiedades
- [ ] Integración con WhatsApp
