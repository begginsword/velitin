// Example function to check if an object is a FieldDef
function isFieldDef(def) {
    // This is a simple check; real implementation may vary
    return def && typeof def === 'object' && def.hasOwnProperty('sort');
}

// Example objects
const fieldOrDatumDef1 = { sort: 'ascending', otherProp: 'value1' };
const fieldOrDatumDef2 = { otherProp: 'value2' };

// Using the conditional assignment
const sort1 = isFieldDef(fieldOrDatumDef1) ? fieldOrDatumDef1.sort : undefined;
const sort2 = isFieldDef(fieldOrDatumDef2) ? fieldOrDatumDef2.sort : undefined;

console.log(sort1); // Output: 'ascending'
console.log(sort2); // Output: undefined
