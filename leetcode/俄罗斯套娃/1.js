/**
根据题目的要求，如果我们选择了 k 个信封，它们的的宽度依次为 w0, w1,..., w{k-1}


同时控制 w 和 h 两个维度并不是那么容易，因此我们考虑固定一个维度，再在另一个维度上进行选择。
例如，我们固定 w 维度，那么我们将数组 envelopes 中的所有信封按照 w升序排序。
这样一来，我们只要按照信封在数组中的出现顺序依次进行选取，就一定保证满足：了。
然而小于等于 和小于 还是有区别的，但我们不妨首先考虑一个简化版本的问题：
如果我们保证所有信封的 w 值互不相同，那么我们可以设计出一种得到答案的方法吗？
在 w 值互不相同的前提下，小于等于和小于是等价的，那么我们在排序后，就可以完全忽略 w 维度，只需要考虑 h 维度了

此时，我们需要解决的问题即为：
给定一个序列，我们需要找到一个最长的子序列，使得这个子序列中的元素严格单调递增，即上面要求的：

那么这个问题就是经典的「最长严格递增子序列」问题了
当我们解决了简化版本的问题之后，我们来想一想使用上面的方法解决原问题，会产生什么错误。当 w 值相同时，
如果我们不规定 h 值的排序顺序，那么可能会有如下的情况：
排完序的结果为[(w,h)]=[(1,1),(1,2),(1,3),(1,4)]，由于这些信封的 w 值都相同，
不存在一个信封可以装下另一个信封，那么我们只能在其中选择 1 个信封。然而如果我们完全忽略 w 维度，剩下的 h 维度为[1,2,3,4]，
这是一个严格递增的序列，那么我们就可以选择所有的 4 个信封了，这就产生了错误。
因此，我们必须要保证对于每一种 w 值，我们最多只能选择 1 个信封。
我们可以将 h 值作为排序的第二关键字进行降序排序，这样一来，对于每一种 w 值，其对应的信封在排序后的数组中是按照 h 值递减的顺序出现的，
那么这些 h 值不可能组成长度超过 1 的严格递增的序列，这就从根本上杜绝了错误的出现。
因此我们就可以得到解决本题需要的方法：
首先我们将所有的信封按照 w 值第一关键字升序、h 值第二关键字降序进行排序；
随后我们就可以忽略 w 维度，求出 h 维度的最长严格递增子序列，其长度即为答案。
 */


var maxEnvelopes = function(envelopes){
    if(envelopes.length === 0){
        return 0
    }

    envelopes.sort((e1,e2)=>{
        if(e1[0] !==e2[0]){
            return e1[0]-e2[0]
        }else{
            return e2[1]-e1[1]
        }
    })

    const n = envelopes.length
    const f = new Array(n).fill(1)
    let ans= 1
    for(let i=1;i<n;++i){
        for(let j=0;j<i;++j){
            if(envelopes[j][1]<envelopes[i][1]){
                f[i]=Math.max(f[i],f[j]+1)
            }
        }
        ans=Math.max(ans,f[i])
    }
    return ans
}