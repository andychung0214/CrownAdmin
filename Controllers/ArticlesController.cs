using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace CrownAdmin.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class ArticlesController : ControllerBase
	{
        //public IActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet]
        [Route("blog/articles")]
        public List<ArticleModel> GetArticle(HttpRequestMessage Request)
        {
            List<ArticleModel> data = new List<ArticleModel>();

            RestClient client = new RestClient("https://www.crownchung.tw/api/web/getarticles");
            RestRequest request = new RestRequest(Method.GET);
            IRestResponse<List<ArticleModel>> response = client.Execute<List<ArticleModel>>(request);

            if (!string.IsNullOrEmpty(response.Content) && response.Content != "[]")
            {
                try
                {
                    data = Newtonsoft.Json.JsonConvert.DeserializeObject<List<ArticleModel>>(response.Content);
                    if (data.Count <= 0)
                    {
                        data = new List<ArticleModel>();
                    }
                    return data;
                }
                catch (Exception e)
                {
                    data = new List<ArticleModel>();
                }
            }
            return data;
        }

        public class ArticleModel
		{
            public int Id { get; set; }
            public string Title { get; set; }
        }

    }
}
