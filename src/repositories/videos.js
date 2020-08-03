import URL_BACKEND from '../config';

const URL_VIDEOS = `${URL_BACKEND}/videos`;

function create(objetoDoVideo) {
  console.log(URL_BACKEND);
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
    .then(async (repostaDoServidor) => {
      if (repostaDoServidor.ok) {
        const resposta = await repostaDoServidor.json();

        return resposta;
      }
      throw new Error('Nao foi possivel cadastrar os dados');
    });
}

export default {
  create,
};
