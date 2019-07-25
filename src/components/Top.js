import React from 'react';
import styled from 'styled-components';
import Roulette from './Roulette';

class Top extends React.Component {
  render() {
    const person = ['tanino', 'honda', 'saito', 'uragami', 'tani', 'fujita'];
    const theme = [
      'Spring Cloud Stream',
      'ECMAScript',
      'Redis',
      'RxJava',
      'TypeScript',
      'Atomic Design',
      'Flyway',
      'OIDC',
      'RBAC',
      'k8s',
      'Open API 3',
      'Terraform',
      'Ansible',
      'Doma',
      'DevOps',
      'AzureDDD',
      'Apache',
      'Twelve-Factor App',
      'JAX-RS',
      'Prometheus',
      'GCP',
      'SRE',
      'Jakarta EE',
      'Go',
      'HTTP/2',
      'NoSQL',
      'TCP/UDP',
      'proxy',
      'CORS',
      'ServiceWorker',
      'create-react-app',
      'CSRF',
      'Linuxカーネル',
      'Consul',
      'DNS',
      'Elixir',
      'Dart',
      'Go',
      'LLVM',
      'Lua',
      'Media Capture and Streams API',
      'Nomad',
      'Rust',
      'ServiceWorker',
      'Vault',
      'Web Authentication API',
      'Web Components',
      'WebAssembly',
      'WebRTC',
      'fanctor/applicative/monad',
      'Flutter',
      'maybe/either/validation',
      'アセンブリ',
      'グラフ探索アルゴリズム',
      'ソフトウェアトランザクショナルメモリ',
      '型推論器',
      'WebAssembly',
      'UI/UX',
      'Mongo DB	',
      'AWS WorkSpaces',
      'PMBOK',
      'SCSS',
      'Anglar',
      'Elastic Search',
      'bash/zsh',
      'webでの時刻の扱い方',
      'Readable Code',
      'GraalVM',
      'Elm',
      'ZGC',
      'LLVM',
      'IPv4/v6 パケット',
      'Vue.js/Nuxt.js',
      'RDBC',
      'Vitess',
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
