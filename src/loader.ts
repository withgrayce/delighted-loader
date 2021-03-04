import { Delighted } from './types';

export class Loader
{
  private api: Delighted | undefined;
  private loader: Promise<Delighted> | undefined;
  private resolve: (api: Delighted) => void;
	private reject: (err: Error) => void;

	constructor(private apiKey: string = null) {
		if (typeof window === 'undefined') {
			throw new Error('delighted is supported only in browser environment');
		}
	}

  public load(): Promise<Delighted> {
    if (typeof this.api !== 'undefined') {
			return Promise.resolve(this.api);
		}

		if (typeof this.loader !== 'undefined') {
			return this.loader;
		}

    return this.loader = new Promise((resolve, reject) => {
			this.resolve = resolve;
			this.reject = reject;

      if (window['delighted']) {
        resolve(window['delighted']);
        return;
      }

      const functions = [
        "survey",
        "reset",
        "config",
        "init",
        "set",
        "get",
        "event",
        "identify",
        "track",
        "page",
        "screen",
        "group",
        "alias"
      ];

      const delighted = window['delighted'] = [];
      for (var idx = 0; idx < functions.length; idx++) {
        var func = functions[idx];
        delighted[func] = delighted[func] || function(functionName) {
          return function() {
            var t = Array.prototype.slice.call(arguments);
            delighted.push([functionName, t])
          }
        }(func)
      }
      delighted['SNIPPET_VERSION'] = "1.0.1";
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = !0;
      script.src = 'https://d2yyd1h5u9mauk.cloudfront.net/integrations/web/v1/library/' + this.apiKey + '/' + 'delighted' + '.js';
      script.onload = () => {
        resolve(delighted as unknown as Delighted);
      };
      script.onerror = (error) => {
        reject(error)
      }
      document.head.appendChild(script);
      // var p = document.getElementsByTagName("script")[0];
      // p.parentNode.insertBefore(o,p)
		});
  }
}
