async function main() {
    try {
        const token = await getAccessToken();
        console.log('Access token:', token);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
