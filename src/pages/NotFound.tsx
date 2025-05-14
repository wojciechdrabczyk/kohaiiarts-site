function NotFound() {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">D:</h1>
            <p>Sorry! We couldn't find the page you were looking for. This might be because:</p>
            <ul className="list-disc list-inside mb-4">
                <li>The page doesn't exist.</li>
                <li>The URL was typed incorrectly.</li>
            </ul>
            <p>
                You can return to the homepage{" "}
                <a
                    href="/"
                    className="text-blue-600 no-underline hover:text-blue-800"
                    title="An Aspiring Digital Illustrator that creates art/illustrations that depict the creation of life in our most raw-natural God-given form."
                >
                    by clicking here
                </a>, or use the navigation bar above—or the mobile menu icon in the top right if you're on a smaller screen.
            </p>
        </div>
    );
}
export default NotFound