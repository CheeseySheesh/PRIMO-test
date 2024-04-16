export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const merged: number[] = [];
    let i = 0, j = collection2.length - 1, k = 0;

    while (i < collection1.length && j >= 0 && k < collection3.length) {
        if (collection1[i] <= collection2[j] && collection1[i] <= collection3[k]) {
            merged.push(collection1[i]);
            i++;
        } else if (collection2[j] <= collection1[i] && collection2[j] <= collection3[k]) {
            merged.push(collection2[j]);
            j--;
        } else {
            merged.push(collection3[k]);
            k++;
        }
    }

    while (i < collection1.length) {
        merged.push(collection1[i]);
        i++;
    }

    while (k < collection3.length) {
        merged.push(collection3[k]);
        k++;
    }

    while (j >= 0) {
        let insertIndex = merged.length;
        while (insertIndex > 0 && collection2[j] < merged[insertIndex - 1]) {
            insertIndex--;
        }
        merged.splice(insertIndex, 0, collection2[j]);
        j--;
    }

    console.log(merged);

    return merged;
}
