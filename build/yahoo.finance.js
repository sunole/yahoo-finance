var rp=require("request-promise"),Promise=require("bluebird"),xml2js=require("xml2js"),parser=new xml2js.Parser;module.exports=function(e){function r(){n=this}var n,s={headlines:"https://feeds.finance.yahoo.com/rss/2.0/headline?s="};return r.prototype={getHeadlines:function(r){var n=s.headlines+r+"&region=US&lang=en-US";return new Promise(function(r,s){e(n).then(function(e){parser.parseString(e,function(e,n){e?s(e):r(n.rss.channel)})}).catch(s)})},getQuote:function(){}},r}(rp);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInlhaG9vLmZpbmFuY2UuanMiXSwibmFtZXMiOlsicnAiLCJyZXF1aXJlIiwiUHJvbWlzZSIsInhtbDJqcyIsInBhcnNlciIsIlBhcnNlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJyIiwiWWFob29GaW5hbmNlQVBJIiwic2VsZiIsInRoaXMiLCJlbmRwb2ludHMiLCJoZWFkbGluZXMiLCJwcm90b3R5cGUiLCJnZXRIZWFkbGluZXMiLCJ0aWNrZXIiLCJ1cmwiLCJyZXNvbHZlIiwicmVqZWN0IiwidGhlbiIsInhtbCIsInBhcnNlU3RyaW5nIiwiZXJyIiwianMiLCJyc3MiLCJjaGFubmVsIiwiY2F0Y2giLCJnZXRRdW90ZSJdLCJtYXBwaW5ncyI6IkFBQUEsR0FBSUEsSUFBS0MsUUFBUSxtQkFDYkMsUUFBVUQsUUFBUSxZQUNsQkUsT0FBU0YsUUFBUSxVQUNqQkcsT0FBUyxHQUFJRCxRQUFPRSxNQUV4QkMsUUFBT0MsUUFBVSxTQUFVQyxHQU96QixRQUFTQyxLQUNQQyxFQUFPQyxLQVBULEdBQUlELEdBRUFFLEdBQ0ZDLFVBQVcsc0RBMkJiLE9BcEJBSixHQUFnQkssV0FDZEMsYUFBYyxTQUFTQyxHQUNyQixHQUFJQyxHQUFNTCxFQUFVQyxVQUFZRyxFQUFTLHVCQUN6QyxPQUFPLElBQUlkLFNBQVEsU0FBU2dCLEVBQVNDLEdBQ25DWCxFQUFFUyxHQUNDRyxLQUFLLFNBQVNDLEdBQ2JqQixPQUFPa0IsWUFBWUQsRUFBSyxTQUFTRSxFQUFLQyxHQUNqQ0QsRUFBS0osRUFBT0ksR0FDVkwsRUFBUU0sRUFBR0MsSUFBSUMsYUFHdkJDLE1BQU1SLE1BR2JTLFNBQVUsY0FNTG5CLEdBQ05UIiwiZmlsZSI6InlhaG9vLmZpbmFuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcnAgPSByZXF1aXJlKCdyZXF1ZXN0LXByb21pc2UnKTtcbnZhciBQcm9taXNlID0gcmVxdWlyZSgnYmx1ZWJpcmQnKTtcbnZhciB4bWwyanMgPSByZXF1aXJlKCd4bWwyanMnKTtcbnZhciBwYXJzZXIgPSBuZXcgeG1sMmpzLlBhcnNlcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbihyKSB7XG4gIHZhciBzZWxmO1xuXG4gIHZhciBlbmRwb2ludHMgPSB7XG4gICAgaGVhZGxpbmVzOiAnaHR0cHM6Ly9mZWVkcy5maW5hbmNlLnlhaG9vLmNvbS9yc3MvMi4wL2hlYWRsaW5lP3M9J1xuICB9XG5cbiAgZnVuY3Rpb24gWWFob29GaW5hbmNlQVBJKCkge1xuICAgIHNlbGYgPSB0aGlzO1xuICB9XG5cbiAgWWFob29GaW5hbmNlQVBJLnByb3RvdHlwZSA9IHtcbiAgICBnZXRIZWFkbGluZXM6IGZ1bmN0aW9uKHRpY2tlcikge1xuICAgICAgdmFyIHVybCA9IGVuZHBvaW50cy5oZWFkbGluZXMgKyB0aWNrZXIgKyAnJnJlZ2lvbj1VUyZsYW5nPWVuLVVTJztcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcih1cmwpXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oeG1sKSB7XG4gICAgICAgICAgICBwYXJzZXIucGFyc2VTdHJpbmcoeG1sLCBmdW5jdGlvbihlcnIsIGpzKSB7XG4gICAgICAgICAgICAgIGlmKGVycikgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgIGVsc2UgcmVzb2x2ZShqcy5yc3MuY2hhbm5lbCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldFF1b3RlOiBmdW5jdGlvbigpIHtcbiAgICAgIFxuICAgIH0sXG5cbiAgfTtcblxuICByZXR1cm4gWWFob29GaW5hbmNlQVBJO1xufSkocnApO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9