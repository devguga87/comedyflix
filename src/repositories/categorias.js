import URL_BACKEND from '../config';

const URL_CATEGORIES = `${URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();

        return resposta;
      }
      throw new Error('Nao foi possivel pegar os dados');
    });
}

function getAllWithVideos() {
  console.log(URL_BACKEND);
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (repostaDoServidor) => {
      if (repostaDoServidor.ok) {
        const resposta = await repostaDoServidor.json();

        return resposta;
      }
      throw new Error('Nao foi possivel pegar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
};
