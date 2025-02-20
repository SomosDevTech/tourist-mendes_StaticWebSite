import { BASE_URL_API } from "../../globalConstants";
import { ResponseDTO, TrilhasHomeCard } from "../../shared-lib/typesHomePage";
import axios, { AxiosError } from "axios";

export const getTrilhas = async () => {
  // needs to update with the correct link
  try {
    const axiosInstance = axios.create({
      baseURL: BASE_URL_API,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await axiosInstance.get<ResponseDTO<TrilhasHomeCard[]>>(
      "/"
    );

    return response.data;
  } catch (error) {
    const errorResponse: ResponseDTO<TrilhasHomeCard[]> = {
      message:
        error instanceof AxiosError
          ? error.message
          : "Erro ao carregar trilhas",
      status: error instanceof AxiosError ? error.response?.status ?? 500 : 500,
      dataType: "TRILHAS",
      data: [],
    };

    return errorResponse;
  }
};
