// SkytoSeeTools Intigration...
// ofline
xmysststyles = '<link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/styles/left.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/styles/right.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/styles/top.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/styles/bottom.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/styles/border.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/styles/classes.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/styles/height.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/styles/width.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/styles/margin.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/styles/padding.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/styles/index.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/Tools/3l-ist.css">';
xmysstscripts = '<script src="file:///C:/Users/Public/Desktop/SkytoSeeTools/Scripts/classes.js"></script><script src="file:///C:/Users/Public/Desktop/SkytoSeeTools/Tools/tools fetcher.js"></script>';
// online
mysststyles = '<link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/styles/left.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/styles/right.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/styles/top.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/styles/bottom.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/styles/border.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/styles/classes.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/styles/height.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/styles/width.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/styles/margin.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/styles/padding.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/styles/index.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/Tools/3l-ist.css">';
mysstscripts = '<script src="https://mnzrch.github.io/SkytoSeeTools/Scripts/classes.js"></script><script src="https://mnzrch.github.io/SkytoSeeTools/Tools/tools fetcher.js"></script>';
if (window.location.origin == 'file://') {
    document.querySelector('head').innerHTML = document.querySelector('head').innerHTML + xmysststyles;
    document.querySelector('body').innerHTML = document.querySelector('body').innerHTML + xmysstscripts;
} else {
    document.querySelector('head').innerHTML = document.querySelector('head').innerHTML + mysststyles;
    document.querySelector('body').innerHTML = document.querySelector('body').innerHTML + mysstscripts;
}




