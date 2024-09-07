import { annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module';
const tech = document.querySelector('#tech');
const mern = document.querySelector('#mern');
const cs = document.querySelector('#csharp');
const linkedIn = document.querySelector('#linkedIn');
const facebook = document.querySelector('#facebook');
const github = document.querySelector('#github');

const a1 = annotate(tech, { type: 'underline', color: 'blue' });
const a2 = annotate(mern, { type: 'highlight', color: 'green' });
const a3 = annotate(cs, { type: 'highlight', color: 'purple' });

const li = annotate(linkedIn, {type: 'highlight', color: '#0a66c2'})
const fb = annotate(facebook, {type: 'highlight', color: '#0866ff'})
const gh = annotate(github, {type: 'highlight', color: '#151b23'})

const ag = annotationGroup([a2, a3, a1]);

setTimeout(() => {
    ag.show()
}, 1200);

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
