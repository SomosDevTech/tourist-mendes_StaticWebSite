import FullEventoType from "../../shared-lib/FullEventoType";
import { ResponseDTO } from "../../shared-lib/typesHomePage";
import axios from "axios";

export const getEventoById = async (id: string) => {
  try {
    const response = await axios.get<ResponseDTO<FullEventoType>>(
      `/evento/${id}`
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const statusCode = error.response.status;
        switch (statusCode) {
          case 400:
            console.error(
              "Requisição inválida: O servidor não conseguiu entender a requisição."
            );
            break;
          case 404:
            console.error("Não encontrado: O evento solicitado não existe.");
            break;
          case 422:
            console.error("Erro ao carregar dados!");
            break;
          case 500:
            console.error(
              "Erro interno do servidor: Houve um problema com o servidor."
            );
            break;
          case 502:
            console.error(
              "Gateway inválido: O servidor recebeu uma resposta inválida de um servidor upstream."
            );
            break;
          case 503:
            console.error(
              "Serviço indisponível: O servidor está temporariamente indisponível."
            );
            break;
          case 504:
            console.error(
              "Timeout do Gateway: O servidor expirou enquanto aguardava uma resposta."
            );
            break;
          default:
            console.error(
              `Erro inesperado: ${statusCode} - ${error.response.data}`
            );
        }
      } else if (error.request) {
        console.error("Nenhuma resposta recebida do servidor.");
      } else {
        console.error("Erro ao configurar a requisição:", error.message);
      }
    } else {
      console.error("Ocorreu um erro inesperado:", error);
    }
    throw new Error("Falha ao buscar os dados do evento.");
  }
};
