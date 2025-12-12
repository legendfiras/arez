import type { Property } from '../types';

const COLLABORATIONS = [
  {
    id: 1,
    country: 'Georgia',
    description: 'Strategic partnerships in Tbilisi and Batumi for premium real estate investments.'
  },
  {
    id: 2,
    country: 'UAE',
    description: 'Dubai and Abu Dhabi luxury property collaborations with leading developers.'
  },
  {
    id: 3,
    country: 'Cyprus',
    description: 'Exclusive deals in Limassol and Nicosia for residential and commercial properties.'
  },
  {
    id: 4,
    country: 'Turkey',
    description: 'Istanbul and Ankara investment opportunities through trusted local partners.'
  },
  {
    id: 5,
    country: 'Greece',
    description: 'Athens and Thessaloniki market access with established real estate networks.'
  },
  {
    id: 6,
    country: 'And Much More',
    description: 'International co-living and co-working spaces with innovative property solutions.'
  }
];

export default function PropertyGrid() {
  return (
    <section className="properties">
      <div className="section-header">
        <h2>Collaborations</h2>
        <p>Global partnerships across key markets.</p>
      </div>
      <div className="collaborations-grid">
        {COLLABORATIONS.map((collab) => (
          <article key={collab.id} className="collaboration-card">
            <div className="collaboration-body">
              <h3 className="collaboration-title">{collab.country}</h3>
              <p className="collaboration-description">{collab.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}