module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        "src/components/**/*.js",
    ],
    testURL: "http://localhost/",
    testMatch: [
        "<rootDir>/src/**/*.(spec).{js,jsx,ts,tsx}",
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js",
        "\\.(css|scss)$": "<rootDir>/assetsTransformer.js"
    },
    setupFilesAfterEnv: [
        "<rootDir>/configureEnzyme.js"
    ]
};