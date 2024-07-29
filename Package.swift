// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorPluginZip",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CapacitorPluginZip",
            targets: ["ZipPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "ZipPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/ZipPlugin"),
        .testTarget(
            name: "ZipPluginTests",
            dependencies: ["ZipPlugin"],
            path: "ios/Tests/ZipPluginTests")
    ]
)