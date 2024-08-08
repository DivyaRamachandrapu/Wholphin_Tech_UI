document.getElementById('toggle-button').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('toggle-button');
    const buddhaImg = document.getElementById('buddha-img');
    const mq100_560 = window.matchMedia('(min-width: 100px) and (max-width: 560px)');
    const mq560_760 = window.matchMedia('(min-width: 560px) and (max-width: 760px)');
    const mq760_900 = window.matchMedia('(min-width: 760px) and (max-width: 900px)');
    const mq900_1200 = window.matchMedia('(min-width: 900px) and (max-width: 1200px)');
    const mq1200_1500 = window.matchMedia('(min-width: 1200px) and (max-width: 1500px)');
    const mq1500 = window.matchMedia('(min-width: 1500px)');

    sidebar.classList.toggle('hidden');

    // Adjust the main content margin based on sidebar visibility
    const mainContent = document.getElementById('main-content');
    if (sidebar.classList.contains('hidden')) {
        mainContent.style.marginLeft = '0';
        toggleButton.style.marginLeft = '0';
    } else if (mq100_560.matches) {
        mainContent.style.marginLeft = '250px';
        toggleButton.style.marginLeft = '35px';
        buddhaImg.style.marginLeft = '50px';
    } else if (mq560_760.matches) {
        mainContent.style.marginLeft = '450px';
        toggleButton.style.marginLeft = '280px';
        buddhaImg.style.marginLeft = '10px';
    } else if (mq760_900.matches) {
        mainContent.style.marginLeft = '280px';
        toggleButton.style.marginLeft = '150px';
        buddhaImg.style.marginLeft = '10px';
    } else if (mq900_1200.matches) {
        mainContent.style.marginLeft = '350px';
        toggleButton.style.marginLeft = '190px';
        buddhaImg.style.marginLeft = '10px';
    } else if (mq1200_1500.matches) {
        mainContent.style.marginLeft = '480px';
        toggleButton.style.marginLeft = '210px';
        buddhaImg.style.marginLeft = '10px';
    } else if (mq1500.matches) {
        mainContent.style.marginLeft = '250px';
        toggleButton.style.marginLeft = '270px';
        buddhaImg.style.marginLeft = '700px';
    }

});

document.getElementById('readBtn').addEventListener('click', function() {
    const moreText = document.getElementById('more');
    if (moreText.style.display === 'none') {
        moreText.style.display = 'inline';
        this.textContent = 'Show less';
    } else {
        moreText.style.display = 'none';
        this.textContent = 'Read more';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const iconBoxes = document.querySelectorAll('.icon-box');

    iconBoxes.forEach(iconBox => {
        iconBox.addEventListener('click', () => {
            const countSpan = iconBox.nextElementSibling;
            if (countSpan && countSpan.classList.contains('count')) {
                let count = parseInt(countSpan.textContent, 10);
                countSpan.textContent = count + 1;
            } else {
                console.error('Count span not found or is not properly aligned with the icon box.');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Get the buttons by their IDs
    const collectionButton = document.getElementById('collectionButton');
    const souvenirButton = document.getElementById('souvenirButton');

    // Define the URLs to redirect to
    const collectionPageURL = 'https://www.artic.edu/artworks/144735/bodhisattva-maitreya-with-fear-not-gesture-abhayamudra';
    const souvenirPageURL = 'https://en.wikipedia.org/wiki/Abhayamudra';

    // Add click event listeners to each button
    collectionButton.addEventListener('click', () => {
        window.location.href = collectionPageURL;
    });

    souvenirButton.addEventListener('click', () => {
        window.location.href = souvenirPageURL;
    });
});
