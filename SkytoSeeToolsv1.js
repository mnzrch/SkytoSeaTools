// SkytoSeeTools Intigration...
// ofline
xmysststyles = '<link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/Styles/left.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/Styles/right.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/Styles/top.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/Styles/bottom.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/Styles/border.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/Styles/classes.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/Styles/height.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/Styles/width.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/Styles/margin.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/Styles/padding.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/Styles/index.css"><link rel="stylesheet" href="file:///C:/Users/Public/Desktop/SkytoSeeTools/Tools/3l-ist.css">';
xmysstscripts = '<script src="file:///C:/Users/Public/Desktop/SkytoSeeTools/Scripts/classes.js"></script><script src="file:///C:/Users/Public/Desktop/SkytoSeeTools/Tools/tools fetcher.js"></script>';
// online
mysststyles = '<link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/Styles/left.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/Styles/right.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/Styles/top.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/Styles/bottom.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/Styles/border.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/Styles/classes.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/Styles/height.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/Styles/width.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/Styles/margin.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/Styles/padding.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/Styles/index.css"><link rel="stylesheet" href="https://mnzrch.github.io/SkytoSeeTools/Tools/3l-ist.css">';
mysstscripts = '<script src="https://mnzrch.github.io/SkytoSeeTools/Scripts/classes.js"></script><script src="https://mnzrch.github.io/SkytoSeeTools/Tools/tools fetcher.js"></script>';
if (window.location.origin == 'file://') {
    document.querySelector('head').innerHTML = document.querySelector('head').innerHTML + xmysststyles;
    document.querySelector('body').innerHTML = document.querySelector('body').innerHTML + xmysstscripts;
} else {
    document.querySelector('head').innerHTML = document.querySelector('head').innerHTML + mysststyles;
    document.querySelector('body').innerHTML = document.querySelector('body').innerHTML + mysstscripts;
}




