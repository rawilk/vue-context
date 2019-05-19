export const normalizeSlot = (name, scope = {}, $scopedSlots = {}, $slots = {}) => {
    // Note: in Vue 2.6.x, all named slots are also scoped slots
    const slot = $scopedSlots[name] || $slots[name];

    return typeof slot === 'function' ? slot(scope) : slot;
};
