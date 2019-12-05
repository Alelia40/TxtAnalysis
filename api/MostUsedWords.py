def main(blob):
    top_five = reversed(sorted(blob.np_counts.items(), key=lambda kv: (kv[1], kv[0]))[-5:])
    return top_five
