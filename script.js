document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const action = event.target.innerText;
            const thumbnail = event.target.closest('.thumbnail');
            const title = thumbnail.querySelector('h4').innerText;

            switch (action) {
                case 'Shortlist':
                    alert(`${title} has been shortlisted!`);
                    break;
                case 'Watch Later':
                    alert(`${title} has been added to watch later!`);
                    break;
                case 'Play Now':
                    alert(`Now playing: ${title}`);
                    break;
                default:
                    break;
            }
        });
    });
});
