import React from 'react';
import styled from 'styled-components';
import Roulette from './Roulette';

class Top extends React.Component {
  render() {
    const person = ['tanino', 'honda', 'saito', 'uragami', 'tani', 'fujita'];
    const theme = [
      'Spring WebFlux',
      'Spring Cloud Stream',
      'MSA',
      'ES',
      'Redis',
      'RESTful API',
      'RxJava',
      'Clean Architecture',
      'React',
      'Redux',
      'APNs',
      'Atomic Design',
      'MQ',
      'SPA',
      'OAuth 2',
      'Fluentd',
      'OIDC',
      'RBAC',
      'k8s',
      'docker',
      'Open API 3',
      'Elasticsearch',
      'Kibana',
      'Datadog',
    ];
    const handleOnComplete = value => {
      console.log(value);
    };
    return (
      <section className="hero is-light">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="box column">
                <PersonRoulet>
                  <Roulette
                    options={person}
                    baseSize={150}
                    onComplete={handleOnComplete}
                  />
                </PersonRoulet>
              </div>
              <div className="box column">
                <ThemeRoulet>
                  <Roulette
                    options={theme}
                    baseSize={300}
                    onComplete={handleOnComplete}
                  />
                </ThemeRoulet>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const PersonRoulet = styled.div`
  /* BookList固有のWrapperスタイル */
`;

const ThemeRoulet = styled.div`
  /* BookList固有のWrapperスタイル */
`;

export default Top;
