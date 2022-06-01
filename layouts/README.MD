# Layouts directory

Nuxt provides a customizable layouts framework you can use throughout your application, ideal for extracting common UI or code patterns into reusable layout components.

Layouts are placed in the `layouts/` directory and will be automatically loaded via asynchronous import when used. Layouts are used by setting a `layout` property as part of your page metadata (if you are using the `~/pages` integration), or by using the `<NuxtLayout>` component.