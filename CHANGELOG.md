# Changelog

All notable changes to this project will be documented here.

<a name="5.0.0"></a>
## [5.0.0](https://github.com/rawilk/vue-context/releases/tag/5.0.0)

Released 2019-11-14

### Added
- Add default export in entry point ([#41](https://github.com/rawilk/vue-context/issues/41)).
- Add support for nested context menus ([#37](https://github.com/rawilk/vue-context/pull/37)).

### Changes
- Update entry point to source ([#33](https://github.com/rawilk/vue-context/issues/33)).
- No longer build component with webpack ([#33](https://github.com/rawilk/vue-context/issues/33)).
- Component source is available through npm now, including the sass files.

### Release notes
- Even though there shouldn't be any breaking changes in this release, it's a major release because
breaking changes were introduced in version 4.1.0, which should have been a major release instead.

<a name="4.1.1"></a>
## [4.1.1](https://github.com/rawilk/vue-context/releases/tag/4.1.1)

Released 2019-10-20

### Bug Fixes
- Fix bug of "Unknown custom element" ([#40](https://github.com/rawilk/vue-context/issues/40)).

<a name="4.1.0"></a>
## [4.1.0](https://github.com/rawilk/vue-context/releases/tag/4.0.3)

Released 2019-10-11

### Breaking Changes
- Move menu styles from js to its own stylesheet ([#36](https://github.com/rawilk/vue-context/issues/36))

### Changes
- Remove core-js as a dependency in favor of local polyfills for a smaller build size ([#33](https://github.com/rawilk/vue-context/issues/33))

<a name="4.0.3"></a>
## [4.0.3](https://github.com/rawilk/vue-context/releases/tag/4.0.3)

Released 2019-07-28

### Bug Fixes
- Make `localItemSelector` reactive to changes from `itemSelector` prop ([#30](https://github.com/rawilk/vue-context/issues/30)).

### Updates
- Update dev dependencies

<a name="4.0.2"></a>
## [4.0.2](https://github.com/rawilk/vue-context/releases/tag/4.0.2)

Released 2019-06-22

### Bug Fixes
- Fix menu item width issues ([#26](https://github.com/rawilk/vue-context/issues/26)).
- Remove outline from menu and menu items when given focus ([#26](https://github.com/rawilk/vue-context/issues/26)).

<a name="4.0.1"></a>
## [4.0.1](https://github.com/rawilk/vue-context/releases/tag/4.0.1)

Released 2019-06-03

### Bug Fixes
- Always emit the close event on click. See issue [#23](https://github.com/rawilk/vue-context/issues/23) 

<a name="4.0.0"></a>
## [4.0.0](https://github.com/rawilk/vue-context/releases/tag/4.0.0)

Released 2019-05-18

### Added
- Added support for keyboard navigation (up and down arrows).
- Added ability to close menu on esc.
- Added `lazy` prop as an alternative to `v-show`.
- Added `tag` prop to specify menu tag (defaults to `<ul>`).

### Changes
- Default menu tag is now `<ul>` and menu is now the top-level element.
- Changed how the menu is styled.

### Updates
- Updated build process and project structure.
- Ran `npm audit fix` to fix vulnerabilities found from dependencies.

<a name="3.4.2"></a>
## [3.4.2](https://github.com/rawilk/vue-context/releases/tag/3.4.2)

Released 2019-04-05

### Bug Fixes
- Only add scroll event listener on `closeOnScroll` prop value change if the menu is open.

<a name="3.4.1"></a>
## [3.4.1](https://github.com/rawilk/vue-context/releases/tag/3.4.1)

Released 2019-04-03

### Updates
- **Scroll Listener:** Only attach the close scroll event listener when opened and immediately remove it when menu is closed
to prevent it being called unnecessarily. 
- **Dependencies:** Removed Vue as a dependency as it never really was one since v3.0.0.
- **Dependencies:** Ran `npm audit fix` to fix vulnerabilities found from dependencies.

<a name="3.4.0"></a>
## [3.4.0](https://github.com/rawilk/vue-context/releases/tag/3.4.0)

Released 2018-11-19

### Bug fixes
- **Close event:** only emit the event if menu is actually open (fixes [#13](https://github.com/rawilk/vue-context/issues/13))

<a name="3.3.1"></a>
## [3.3.1](https://github.com/rawilk/vue-context/releases/tag/3.3.1)

Released 2018-10-23

### Changes
- Context menu now closes via [clickaway](https://github.com/simplesmiler/vue-clickaway) instead of a blur event. Credit: [robjbrain](https://github.com/robjbrain)

### Updates
- Updated vue and other dev dependencies.

<a name="3.3.0"></a>
## [3.3.0](https://github.com/rawilk/vue-context/releases/tag/3.3.0)

Released 2018-10-15

### Features
- **Events:** both open and close events are now emitted by the component. ([#10](https://github.com/rawilk/vue-context/issues/10))

<a name="3.2.0"></a>
## [3.2.0](https://github.com/rawilk/vue-context/releases/tag/3.2.0)

Released 2018-09-12

### Features
- **Close on click prop:** added a prop to prevent closing the context menu on click. ([#8](https://github.com/rawilk/vue-context/issues/8))

<a name="3.1.1"></a>
## [3.1.1](https://github.com/rawilk/vue-context/releases/tag/3.1.1)

Released 2018-06-23

### Updates
- Updated README.md
- Added code comments

<a name="3.1.0"></a>
## [3.1.0](https://github.com/rawilk/vue-context/releases/tag/3.1.0)

Released 2018-05-29

### Features
- **Scroll prop:** added a prop to close the context menu automatically on window scroll. ([#2](https://github.com/rawilk/vue-context/issues/2))

<a name="3.0.2"></a>
## [3.0.2](https://github.com/rawilk/vue-context/releases/tag/3.0.2)

Released 2018-05-29

### Updates
- Updated documentation

### Added
- Added [demos](https://vue-context.randallwilk.com) for the component.

<a name="3.0.0"></a>
## [3.0.0](https://github.com/rawilk/vue-context/releases/tag/3.0.0)

Released 2018-05-26

### Breaking changes
- Changed slot scope definition from `userData` to just `data`.
- Component gets imported as `{ VueContext }` instead of `VContext` now.

### Updates
- Updated dependencies
- Updated documentation

### Changes
- Changed code structure and build process.

<a name="2.0.1"></a>
## [2.0.1](https://github.com/rawilk/vue-context/releases/tag/2.0.1)

Released 2017-08-18

### Added
- License file
- Changelog file

### Removed
- Removed bottom border from context menu line items.

<a name="2.0.0"></a>
## [2.0.0](https://github.com/rawilk/vue-context/releases/tag/2.0.0)

Released 2017-08-17

- Initial release
