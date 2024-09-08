import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';
const tech = document.querySelector('#tech');
const mern = document.querySelector('#mern');
const cs = document.querySelector('#csharp');
const linkedIn = document.querySelector('#linkedIn');
const facebook = document.querySelector('#facebook');
const github = document.querySelector('#github');

const a1 = annotate(tech, { type: 'underline', color: 'blue' });
const a2 = annotate(mern, { type: 'circle', color: 'green' });
const a3 = annotate(cs, { type: 'circle', color: 'purple' });

const li = annotate(linkedIn, {type: 'box', color: '#0a66c2'})
const fb = annotate(facebook, {type: 'box', color: '#0866ff', padding: 6})
const gh = annotate(github, {type: 'circle', color: '#151b23', padding: 8})

const ag = annotationGroup([a2, a3, a1]);

setTimeout(() => {
    ag.show()
}, 1200);

const home = document.querySelector('.main-container');
home.addEventListener('scroll', (e) => {
    ag.hide();
    // console.log(e.target)
})

// const div = document.querySelector('.text')

// div.addEventListener('mouseover', () => {
//    ag.show();
// });
// if (performance == performance.TYPE_RELOAD) {
//     ag.hide();
// }
// div.addEventListener('mouseout', () => { ag.hide() });

/////////////

linkedIn.addEventListener('mouseover', () => li.show());
facebook.addEventListener('mouseover', () => fb.show());
github.addEventListener('mouseover', () => gh.show());

linkedIn.addEventListener('mouseout', () => li.hide());
facebook.addEventListener('mouseout', () => fb.hide());
github.addEventListener('mouseout', () => gh.hide());

// const links = [linkedIn, facebook, github]
// links.forEach(element => {
//     element.addEventListener('mouseout', () => {
//         li.hide();
//         fb.hide();
//         gh.hide();
//     })
// });
