# Changelog

# 3.4.0 (Nov 19, 2018)

# Fixed
- Only emit close event if menu is actually open - [#13](https://github.com/rawilk/vue-context/issues/13)

# 3.3.1 (Oct 23, 2018)

### Changed
- Context menu now closes via [clickaway](https://github.com/simplesmiler/vue-clickaway)
instead of blur event. Credit to [robjbrain](https://github.com/robjbrain)
for pointing it out.

### Updated
- Updated vue and other dev dependencies.

# 3.3.0 (Oct 15, 2018)

### Added
- Context menu now emits events when opened and closed ([issue #10](https://github.com/rawilk/vue-context/issues/10))

# 3.2.0 (Sep 12, 2018)

### Added
- Prop to tell context menu not to close automatically on click ([issue #8](https://github.com/rawilk/vue-context/issues/8))

## 3.1.1 (June 23, 2018)

### Updated
- README.md
- Code comments

## 3.1.0 (May 29, 2018)

### Added
- Close context menu automatically on window scroll ([issue #2](https://github.com/rawilk/vue-context/issues/2))

## 3.0.2 (May 28, 2018)

### Updated
- Documentation

### Added
- Add [demos](https://rawilk.github.io/vue-context) for the component

## 3.0.0 (May 26, 2018)

### Breaking Changes
- Change slot scope definition from `userData` to just `data`
- Component gets imported as `{ VueContext }` instead of `VContext` now

### Updated
- Dependencies
- Documentation

### Changed
- Code structure and build process

## 2.0.1 (Aug 18, 2017)

### Added
- License file
- Changelog file

### Removed
- Bottom border from context menu line items.

## 2.0.0 (Aug 17, 2017)
- Initial release
